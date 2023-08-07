const menuIcon = document.querySelector(".mobile-nav-bar");
const navLinks = document.querySelector(".nav-links");


const addActive = () => {
    navLinks.classList.toggle("active");
}

menuIcon.addEventListener("click", addActive)