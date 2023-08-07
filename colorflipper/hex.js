


const container = document.querySelector(".container");
const color = document.querySelector(".color");
const btn = document.querySelector('.btn');
const mainContainer = document.querySelector('.main-container');



const changeBackground = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    console.log(red,green,blue)
    const hexValue = rgbToHex(red, green, blue);
    mainContainer.style.backgroundColor = hexValue;
    color.innerText = hexValue;
}

btn.addEventListener("click", changeBackground);



const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  