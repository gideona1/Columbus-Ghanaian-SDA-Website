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

  setInterval(() => {
    document.getElementById("cg-ds-main-loading-ind").classList.add("loading");
  }, 500);

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

  document.getElementById("cg-ds-logout-ind").classList.add("loading");

  fetchServer(query, {}, (data, error) => {
    if (error) {
      console.error("ERROR: " + error.message);
    } else {
      window.location.href = "../login";
    }

    document.getElementById("cg-ds-logout-ind").classList.remove("loading");
  });
};

const initialize = (userData) => {
  if (userData === null) {
    window.location.href = "../login";
  }

  const name = userData["name"];
  const role = userData["role"];
  const verified = userData["verified"];

  document.querySelector(".cg-dashboard-lp-user > .name > #cg-ds-display-name").textContent = name;
  document.querySelector(".cg-dashboard-lp-user > .role").textContent =
    role === 0 ? "Member" : role === 1 ? "Administrator" : role === 2 ? "Master" : "Unknown";
  console.log(userData);

  // Verified & verified badge
  if (!verified) document.getElementById("cg-user-not-verified").classList.remove("hidden");

  const badge = document.createElement("i");
  badge.className = verified ? "fa-solid fa-circle-check" : "fa-solid fa-circle-minus";
  document.getElementById("cg-ds-display-verified").appendChild(badge);

  document.querySelector(".cg-ds-loading-overlay").classList.add("hidden");
  document.querySelector(".cg-fetching").classList.remove("cg-fetching");
};

getUserData();

// Create Manage User Page
const getAllUsers = () => {
  const query = `
    query GetAllUsers {
      getAllUsers {
        name
        email
        role
        verified
        id
      }
    }
  `;

  document.getElementById("cg-ds-man-refresh").classList.add("loading");

  document.getElementById("cg-ds-no-access").classList.add("hidden");
  document.getElementById("cg-ds-user-manage").classList.remove("hidden");

  fetchServer(query, {}, (data, error) => {
    if (!error) {
      createUserList(data["getAllUsers"]);
    } else {
      if (error.extensions.code === "USER_NO_ACCESS") {
        document.getElementById("cg-ds-user-manage").classList.add("hidden");
        document.getElementById("cg-ds-no-access").classList.remove("hidden");
      }

      console.error("ERROR: " + error.message);
    }

    document.getElementById("cg-ds-man-refresh").classList.remove("loading");
  });
};

const createUserList = (userList) => {
  document.getElementById("cg-sd-man-userDisplay").innerHTML = "";

  userList.forEach((user) => {
    const name = user.name;
    const role = user.role;
    const verified = user.verified;
    const email = user.email;
    const id = user.id;

    const displayRole = role === 0 ? "Member" : role === 1 ? "Administrator" : role === 2 ? "Master" : "Unknown";
    const displayVerified = verified ? "verified" : "not verified";

    const userDisplay = document.createElement("div");
    userDisplay.innerHTML = `
    <div class="cg-ds-man-user-display">
      <div class="user-information">
        <div class="user-name">${name}</div>
        <div class="user-role">${displayRole}, ${displayVerified}</div>
        <div class="user-email">${email}</div>
      </div>

      <div class="user-action">
        <button class="cg-link-btn light" style="margin-right: 5px">View</button>
        <button class="cg-link-btn light" ${verified ? "disabled" : ""}>${verified ? "Verified" : "Verify"}</button>
      </div>
    </div>`;

    document.getElementById("cg-sd-man-userDisplay").appendChild(userDisplay);
  });
};

const toggleSection = (section, callback) => {
  const allDisplay = document.querySelectorAll(`[data-section]`);
  const display = document.querySelector(`[data-section="${section}"]`);

  const allButtons = document.querySelectorAll(`[data-for-section]`);
  const button = document.querySelector(`[data-for-section="${section}"]`);

  allDisplay.forEach((display) => {
    display.classList.add("hidden");
  });

  allButtons.forEach((display) => {
    display.classList.remove("selected");
  });

  display.classList.remove("hidden");
  button.classList.add("selected");

  callback ? callback() : null;
};
