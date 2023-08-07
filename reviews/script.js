const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
  
const img = document.querySelector(".author-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const review = document.querySelector(".review");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const surpriseMe = document.querySelector(".surprise-btn")

let reviewCount = 0;

const loadReviews = () => { 
    let reviewList = reviews[reviewCount];
    img.src = reviewList.img;
    author.innerText = reviewList.name;
    job.innerText = reviewList.job;
    review.innerText = reviewList.text;       
}
loadReviews();
const onClickNext = () => {

    if (reviews.length > reviewCount) {
        reviewCount++;
        loadReviews();
    } else {
        reviewCount = 0;
        loadReviews();
    }
   
    
}
const onClickPrev = () => {
    if (  reviewCount > 0) {
        reviewCount--;
        loadReviews();
    } else {
        reviewCount = reviews.length-1;
        loadReviews();
    }
   
}

const onClickSurpriseMe = () => { 

    reviewCount = Math.floor(Math.random() * reviews.length)
    console.log(reviewCount)
    loadReviews();

}

prevBtn.addEventListener("click", onClickPrev);
nextBtn.addEventListener("click", onClickNext);
surpriseMe.addEventListener("click", onClickSurpriseMe);
