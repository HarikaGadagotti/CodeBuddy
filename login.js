document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form data
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Check if user exists and password matches
  if (localStorage.getItem(email) === password) {
    // Store logged-in user in localStorage
    localStorage.setItem('loggedInUser', email);
    // Redirect to dashboard page after successful login
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginMessage').textContent = 'Invalid email or password. Please try again.';
  }
});