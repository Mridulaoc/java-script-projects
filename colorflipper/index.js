const container = document.querySelector(".container");
const color = document.querySelector(".color");
const btn = document.querySelector('.btn');
const mainContainer = document.querySelector('.main-container');


const bgc= ["red","green","blue","rgb(34,55,76)","#234567"]



const changeBackground = () => {
    const index = Math.floor(Math.random() * 5);
    console.log(index);
    mainContainer.style.backgroundColor = bgc[index];
    color.textContent =bgc[index];
}

btn.addEventListener("click", changeBackground);


