// Function to display user's email and score
function displayUserInfo() {
  const userEmail = localStorage.getItem('loggedInUser');
  if (userEmail) {
    document.getElementById('userEmail').textContent = 'Logged in as: ' + userEmail;
    const userScore = localStorage.getItem(userEmail + '_score');
    if (userScore) {
      document.getElementById('userScore').textContent = userScore;
    }
  }
}

// Function to log out user
function logout() {
  localStorage.removeItem('loggedInUser'); // Remove user from localStorage
  window.location.href = 'login.html'; // Redirect to login page
}

// Display user's information when the page loads
document.addEventListener('DOMContentLoaded', function() {
  displayUserInfo();
});
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

window.onload = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
};
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('scoreChart').getContext('2d');
  const scoreChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // you can update dynamically
      datasets: [{
        label: 'Your Score',
        data: [10, 20, 35, 50], // Replace with localStorage or backend data
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});

