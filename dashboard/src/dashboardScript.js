const getUserData = () => {
  const query = `
    query Query {
        getUser {
            id
            name
            email
            role
            verified
        }
    }
  `;

  fetchServer(query, {}, (data, error) => {
    if (error) {
      console.log(error);

      if (error.extensions.code === "USER_UNDEFINED_1") {
        window.location.href = "../login";
      }
    } else {
      initialize(data["getUser"]);
    }
  });
};

const logoutUser = () => {
  const query = `
    mutation Mutation {
        logoutUser
    }
  `;

  fetchServer(query, {}, (data, error) => {
    if (error) {
      console.error("ERROR: " + error.message);
    } else {
      window.location.href = "../login";
    }
  });
};

const initialize = (userData) => {
  if (userData === null) {
    window.location.href = "../login";
  }

  const name = userData["name"];
  const role = userData["role"];

  document.querySelector(".cg-dashboard-lp-user > .name").textContent = name;
  document.querySelector(".cg-dashboard-lp-user > .role").textContent = role === 0 ? "Member" : role === 1 ? "Admin" : role === 2 ? "Master" : "Unknown";
  console.log(userData);

  document.querySelector("body").className = "";
};

getUserData();
