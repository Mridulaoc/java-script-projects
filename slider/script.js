const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let counter = 0;


slides.forEach((slide, index) => {
    slide.style.left=`${index*100}%`;
})


const goNext = () => {
    counter++;
    slideImage();
    
}
 
const goPrev = () => {
    counter--;
    slideImage();
    
 }


const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })  
    if (counter > 0) {
        prevBtn.style.display = 'inline-block';
    } else {
        prevBtn.style.display = 'none';
    }
    if (counter  >=   slides.length - 1) {
        nextBtn.style.display = 'none';
    }
    else {
        nextBtn.style.display = 'inline-block';
    }

}

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);