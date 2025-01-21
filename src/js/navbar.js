function openNavbar() {
  const navLinks = document.querySelector(".nav-mobile");
  if (navLinks) {
    /* navLinks.stylle.display = "flex"; */
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
      return;
    } else {
      navLinks.style.display = "block";
      return;
    }
  } else {
    console.error("Element with class 'nav-links' not found");
  }
}
<<<<<<< HEAD
=======

function closeNavbar() {
  const navLinks = document.querySelector(".nav-mobile");
  if (navLinks) {
    navLinks.style.display = "none";
  } else {
    console.error("Element with class nav-links not found");
  }
}
>>>>>>> suraj
