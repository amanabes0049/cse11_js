// Select elements
const text = document.getElementById("text");
const title = document.getElementById("title");
const list = document.getElementById("list");

const changeTextBtn = document.getElementById("changeTextBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const addItemBtn = document.getElementById("addItemBtn");

// Event 1: Change text content
changeTextBtn.addEventListener("click", function() {
    text.textContent = "The content has been changed dynamically!";
});

// Event 2: Change color
changeColorBtn.addEventListener("click", function() {
    title.style.color = "red";
});

// Event 3: Add new list item
addItemBtn.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
});
//Event 4: remove item on click
removeItemBtn.addEventListener("click", function() {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});
