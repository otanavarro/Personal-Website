const toggleButton = document.getElementById("mode-toggle");

// Check if a mode is already stored in localStorage
const currentMode = localStorage.getItem("theme");

if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "🌞"; // Sun emoji for light mode
} else {
  toggleButton.textContent = "🌙"; // Moon emoji for dark mode
}

// Toggle dark mode
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button emoji
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌞"; // Switch to sun emoji
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙"; // Switch to moon emoji
    localStorage.setItem("theme", "light");
  }
});
