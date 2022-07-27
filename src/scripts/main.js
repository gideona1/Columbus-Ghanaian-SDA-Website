const toggleNavigation = (state) => {
  // True: Open Navigation
  // False: Close Navigation
  const navigation = document.getElementById("cg-mobile-navigation");
  navigation.style = state ? "display: block !important;" : "display: none !important;";
};

const fetchServer = (query, variables, callback) => {
  // const server = "http://localhost:4000/graphql";
  const server = "https://cgsda-server.herokuapp.com/graphql";

  const graphql = JSON.stringify({
    query,
    variables,
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: graphql,
    credentials: "include",
  };

  fetch(server, requestOptions)
    .then((response) => response.json())
    .then((response) => callback(response.data, response.errors != null ? response.errors[0] : undefined))
    .catch((error) => {
      callback({}, { message: "Unknown server error: " + error.message });
      console.error(error);
    });
};
