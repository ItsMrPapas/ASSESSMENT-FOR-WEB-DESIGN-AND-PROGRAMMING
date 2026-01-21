// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}

// Toggle theme and save preference
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;

  // SweetAlert (Fancy Popup)
  Swal.fire({
    title: "THANK YOU FOR CONTACTING!",
    text: "THANK YOU FOR YOUR SUBMISSION, " + name + "! WE WILL CONTACT YOU SOON.",
    icon: "success",
    
    confirmButtonColor: "#037dff"
  });

  this.reset(); // Clear form
});
const whoBtn = document.getElementById("who-are-we");

whoBtn.addEventListener("click", () => {
 
});