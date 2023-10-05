document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
    const resetForm = document.getElementById("reset-form");
    const message = document.getElementById("message");
    const loginMessage = document.getElementById("login-message");
    const resetMessage = document.getElementById("reset-message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value.toLowerCase();
      const password = document.getElementById("password").value;

      const existingUser = users.find((user) => user.email === email);
      if (existingUser) {
        message.classList.remove("hidden");
      } else {
        // If the email doesn't exist, register the user
        const newUser = {
          firstname: document.getElementById("firstname").value,
          lastname: document.getElementById("lastname").value,
          email: email,
          password: password,
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful!");
        registrationForm.reset();
        message.classList.add("hidden");
      }
    });

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const loginEmail = document
        .getElementById("login-email")
        .value.toLowerCase();
      const loginPassword = document.getElementById("login-password").value;

      const authenticatedUser = users.find(
        (user) =>
          user.email === loginEmail && user.password === loginPassword
      );

      if (authenticatedUser) {
        alert("Login successful!");
        window.location.href = "dashboard.html"
        loginForm.reset();
        loginMessage.classList.add("hidden");
      } else {
        loginMessage.classList.remove("hidden");
      }
    });

    resetForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const resetEmail = document
        .getElementById("reset-email")
        .value.toLowerCase();
      const newPassword = document.getElementById("new-password").value;

      const existingUserIndex = users.findIndex(
        (user) => user.email === resetEmail
      );

      if (existingUserIndex !== -1) {
        users[existingUserIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password reset successful!");
        resetForm.reset();
        resetMessage.classList.add("hidden");
      } else {
        resetMessage.classList.remove("hidden");
      }
    });
  });