document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
  
    menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("active"); // Toggle the 'active' class
      menuIcon.classList.toggle("fa-times"); // Toggle the 'x' icon
    });
  
    // Close the menu when a link is clicked
    const navLinks = navbar.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.remove("fa-times");
      });
    });
  });