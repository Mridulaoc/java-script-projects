const alert = document.querySelector(".alert");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");
const groceryList = document.querySelector(".list");
const listContainer = document.querySelector(".list-container");
const clearBtn = document.querySelector(".clrbtn")
const editBtns = document.querySelector(".edit");
const groceryItem = document.querySelectorAll(".list-item");




let listItems = 0;

// for showing added msg 

const showAdded = () => {
    alert.style.display="block";
    alert.classList.add("added");
    alert.innerText = "Added to list";
    setInterval(() => {
        alert.style.display="none";
    }, 1500);
}

//  to change btn from submit to edit 



// adding item to the list 

const addListItem = () => {
    let itemName = input.value;
    const listItem = `<div class="list">
    <span class="list-item">${itemName}</span>    
        <button class="edit"><i class="fa-regular fa-pen-to-square" style="color: #36873b;"></i></button>
        <button class="delete"><i class="fa-solid fa-trash" style="color: #f10404;"></i></button>
            
</div>`
    listContainer.insertAdjacentHTML("beforeend", listItem);
    showAdded();
    input.value = "";
    listItems++;
    if (listItems > 0) {
        clearBtn.style.display = 'block'
    }



// deleting item from the list


    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((btn,index) => {        
        btn.addEventListener("click", () => {            
            btn.parentNode.remove();
            listItems--;
            if (listItems == 0) {
                clearBtn.style.display = 'none'
            }
        })
    })

// editing and adding them again into the list
    
    // const editBtns = document.querySelectorAll(".edit");
    // const groceryItem = document.querySelectorAll(".list-item");
    // editBtns.forEach((edit, index) => {
    //     edit.addEventListener("click", (id) => {        
    //         input.value = groceryItem[id].innerText;
    //         submitBtn.innerText = "Edit";
    //         let editId = index;
    //         if (submitBtn.innerText === "Edit") {
    //             submitBtn.addEventListener("click", () => {
    //                 groceryItem.map((item, index) => {
    //                     if (index === editId) {
    //                         groceryItem[editId].innerText = input.value;
    //                     }
                            
    //                 })
                   
                    
    //              })
    //         }
    //     })
    // })
    
    

    

}
   
const editListItem = (id) => {
    input.value = groceryItem[id].innerText;
}

submitBtn.addEventListener('click', addListItem);
editBtns.addEventListener('click', editListItem);

clearBtn.addEventListener()


const element = document.getElementById("myLI");

function removeLi() {
  element.parentNode.removeChild(element);
}
function appendLi() {
  const list = document.getElementById("myList");
  list.appendChild(element);
}

