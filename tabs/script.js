const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');


tabBtns.forEach((tabBtn, index) => {
    
    tabBtn.addEventListener('click', (e) => {
        tabBtns.forEach((tabBtn) => { tabBtn.classList.remove('active') })
        tabBtn.classList.add('active');
        contents.forEach((content) => { content.classList.remove('active') })
        contents[index].classList.add('active');
       
    });
        
})

