const qaContainer = document.querySelectorAll('.qa-container');
const plusIcon = document.getElementsByClassName('plus-icon');
const minusIcon = document.querySelectorAll('.minus-icon');
const qContainer = document.querySelectorAll('.q-container');
console.log(qContainer)

for (let i = 0; i < qaContainer.length; i++){
     minusIcon[i].style.display = 'none';
    qaContainer[i].addEventListener('click', () => {  
       
        const result = qaContainer[i].classList.toggle('active');
        qContainer[i].classList.toggle('border');
        if (result) {
            minusIcon[i].style.display = 'block';
            plusIcon[i].style.display = 'none';
           
        } else {
            minusIcon[i].style.display = 'none';
            plusIcon[i].style.display = 'block';
        }
    })
}
// qContainer[i].style.border = '1px solid gray';