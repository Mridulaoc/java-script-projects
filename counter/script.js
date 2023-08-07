const counter = document.querySelector(".counter");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");

let value = 0;

const changeColor = (value) => {
    if (value > 0) {
       counter.style.color="green"
    } else if (value == 0) {
        counter.style.color="black"
    } else {
        counter.style.color="red"
   }
        
    }


const incrementCounter = () => {
  
    value = value + 1;
    changeColor(value)
    counter.textContent = value;
   
}

const decrementCounter = () => {

    value = value - 1;
    counter.textContent = value;
    changeColor(value);
    
}

const resetCounter = () => {

    value = 0;
    counter.textContent = value;
    changeColor(value);
    
}


increment.addEventListener("click", incrementCounter);
reset.addEventListener("click", resetCounter);
decrement.addEventListener("click", decrementCounter);