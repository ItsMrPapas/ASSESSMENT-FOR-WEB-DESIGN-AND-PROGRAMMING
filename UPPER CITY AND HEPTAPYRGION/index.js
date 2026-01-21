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
const whoBtn = document.getElementById("who-are-we");

whoBtn.addEventListener("click", () => {
 
});
document.getElementById("SUBMIT").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("SUBMIT").value;

  // SweetAlert (Fancy Popup)
  Swal.fire({
    title: "THANK YOU FOR CONTACTING!",
    text: "THANK YOU FOR YOUR SUBMISSION, " ,
    icon: "success",
    
    confirmButtonColor: "#037dff"
  });

  this.reset(); // Clear form
});