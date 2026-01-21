const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if(localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
const contactBtn = document.getElementById("contact-us");

contactBtn.addEventListener("click", () => {
 
});
