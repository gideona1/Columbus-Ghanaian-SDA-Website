const authLogin = () => {
  const button = document.getElementById("cg-sn-form-submit");

  button.setAttribute("disabled", "true");
  const email = document.getElementById("cg-sn-form-email").value;
  const password = document.getElementById("cg-sn-form-password").value;

  const query = `
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
  `;

  const variables = { email, password };

  fetchServer(query, variables, (data, error) => {
    if (error) {
      console.log("ERROR: " + error.message);
      button.removeAttribute("disabled");
    } else {
      button.textContent = "Redirecting...";
      console.log("Log in success, cookie stored");

      setTimeout(() => {
        window.location.href = "../dashboard";
      }, 1250);
      document.getElementsByTagName("main")[0].classList.add("cg-lg-success");
    }
  });
};
