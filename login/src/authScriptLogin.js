const authLogin = () => {
  const errorDisplay = document.querySelector(".cg-form-error");
  const button = document.getElementById("cg-sn-form-submit");
  const email = document.getElementById("cg-sn-form-email").value;
  const password = document.getElementById("cg-sn-form-password").value;

  errorDisplay.classList.remove("show");
  errorDisplay.textContent = "";
  button.setAttribute("disabled", "true");

  const query = `
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
  `;

  const variables = { email, password };

  fetchServer(query, variables, (data, error) => {
    if (error) {
      errorDisplay.classList.add("show");
      errorDisplay.textContent = error.message;

      button.removeAttribute("disabled");
    } else {
      button.textContent = "Redirecting...";

      setTimeout(() => {
        window.location.href = "../dashboard";
      }, 1350);
      document.getElementsByTagName("main")[0].classList.add("cg-lg-success");
    }
  });
};
