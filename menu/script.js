const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const menuContainer = document.querySelector(".menu-container");
const menuItem = document.querySelectorAll(".menu-item");
const btnContainer = document.querySelector(".btn-container");



const loadMenu = () => {
  displayMenuItem(menu);
  displayMenuButtons();
}

const displayMenuItem = (menuItems) => {
  const displayMenu = menuItems.map((item) => {
    return (`<div class="menu-item">
    <img src=${item.img} alt=${item.title} class="image">
    <div class="item-info">
        <div class="item-title">
            <div class="name">${item.title}</div>
            <div class="price">$${item.price}</div>
        </div>
        <p class="item-desc">${item.desc}</p>
    </div>
</div>`);
  }).join("");
  menuContainer.innerHTML = displayMenu;
}

const displayMenuButtons = () => {
  const categories = menu.reduce((values, item) => {
    
    if (!values.includes(item.category)) {
      values.push(item.category);
    }  

    return values;

  }, ["all"]);

  const categoryBtn = categories.map((category) => {
    return `<button class="filter-btn" type="button" data-category=${category}>${category}</button>`;
  })
    .join("");
  
  btnContainer.innerHTML = categoryBtn;
  
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach( (btn)=> {
    btn.addEventListener("click", (e)=> {
      
      const category = e.currentTarget.dataset.category;
      const menuCategory = menu.filter((menuItem)=> {       
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItem(menu);
      } else {
        displayMenuItem(menuCategory);
      }
    });
  });
}


loadMenu();



