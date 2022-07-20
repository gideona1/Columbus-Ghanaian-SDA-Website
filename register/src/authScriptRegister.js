const authRegister = () => {
  const errorDisplay = document.querySelector(".cg-form-error");
  const button = document.getElementById("cg-rg-form-submit");
  const name = document.getElementById("cg-rg-form-name").value;
  const email = document.getElementById("cg-rg-form-email").value;
  const password = document.getElementById("cg-rg-form-password").value;

  errorDisplay.classList.remove("show");
  errorDisplay.textContent = "";

  button.setAttribute("disabled", "true");

  const query = `
    mutation CreateUser($name: String!, $email: String!, $password: String!) {
      createUser(name: $name, email: $email, password: $password)
    }
  `;

  const variables = { name, email, password };

  fetchServer(query, variables, (data, error) => {
    if (error) {
      errorDisplay.classList.add("show");
      errorDisplay.textContent = error.message;

      button.removeAttribute("disabled");
    } else {
      button.textContent = "Redirecting...";

      setTimeout(() => {
        window.location.href = "../dashboard";
      }, 1250);
      document.getElementsByTagName("main")[0].classList.add("cg-lg-success");
    }
  });
};
