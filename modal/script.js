const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-modal");
const openBtn = document.querySelector(".open-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".fa-xmark");


const openModalContent = () => {
    
    overlay.style.display = "block";
    openModal.style.visibility = "visible";

}

const closeModalContent = () => {
    overlay.style.display = "none";
    openModal.style.visibility = "hidden";
}

openBtn.addEventListener("click", openModalContent);
closeBtn.addEventListener("click", closeModalContent);