
const toggleBtn = document.querySelectorAll(".toggle-btn");
const btn = document.querySelector(".btn");
const video=document.querySelector(".video");

const playVideo = () => {
    video.play();
    btn.classList.remove("moveLeft");
    btn.classList.add("moveRight");   
}

const pauseVideo = () => {
    video.pause();
    btn.classList.remove("moveRight");
    btn.classList.add("moveLeft");
}
const loadVideo = () => {
    playVideo();
}
loadVideo();
