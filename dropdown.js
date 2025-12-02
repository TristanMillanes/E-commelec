document.addEventListener('DOMContentLoaded', () => {
  const profileBtn = document.getElementById('profileBtn');
  const profileDropdown = document.getElementById('profileDropdown');
  const logoutBtn = document.getElementById('logoutBtn');

  // Toggle dropdown visibility
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
      profileDropdown.classList.remove('active');
    }
  });

  // Logout action - redirect to login page
  logoutBtn.addEventListener('click', () => {
    // If using Firebase Auth, add signOut() here
    // Example: firebase.auth().signOut().then(() => { ... });

    // Redirect to login page
    window.location.href = "login.html"; // Change to your login page URL
  });
});
