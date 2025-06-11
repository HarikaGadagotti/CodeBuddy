document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let valid = true;

  // Clear all errors
  document.querySelectorAll(".error-message").forEach(e => e.innerText = "");

  // Name check
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    valid = false;
  }

  // Password strength
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    valid = false;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    document.getElementById("confirmError").innerText = "Passwords do not match.";
    valid = false;
  }

  if (valid) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userScore", 0);

    alert("Signup successful! Redirecting to dashboard...");
    window.location.href = "dashboard.html";
  }
});

// Toggle password visibility
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}
