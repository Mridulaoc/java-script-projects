const navBar = document.querySelector(".nav-bar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-xmark");


const addActive = () => {
    navBar.classList.toggle("active");
}

closeBtn.addEventListener("click", addActive);
menuBtn.addEventListener("click", addActive);