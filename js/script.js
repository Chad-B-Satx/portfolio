// Get the hamburger menu toggle and the nav links
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Add a click event listener to the hamburger menu
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
