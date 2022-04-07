// Navbar
function toggleLinks() {
    let element = document.getElementById("myLinks");
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }


// Footer Date
let year = new Date();
let footerText = document.getElementById("copyright");
footerText.innerHTML += ' ' + year.getFullYear();