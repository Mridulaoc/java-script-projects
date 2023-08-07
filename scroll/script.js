const navbar = document.querySelector(".navbar");
const updateYear = document.querySelector(".year");
const hamburgerMenu = document.querySelector(".fa-bars")
const menu = document.querySelector(".nav-links");


// to get updated year in footer 

const date = new Date();
const year = date.getFullYear();
updateYear.innerText = year;


// sticky navbar 

const sticky = navbar.offsetTop;
window.onscroll = function () {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}

// responsive mobile menu

hamburgerMenu.addEventListener("click", function () {
    menu.classList.toggle("active");
    
})
