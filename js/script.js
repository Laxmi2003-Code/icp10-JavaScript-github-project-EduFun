document.addEventListener("DOMContentLoaded" ,function () {
  console.log("Javascript file is linked correctly !")
});

function hamburgerMenu() {
    const hamNav = document.getElementById("ham-nav");
    hamNav.classList.toggle("show");
  }