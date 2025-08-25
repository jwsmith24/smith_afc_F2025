// script.js
// Name: Jake Smith
// Task8 - Shopping List Operations

// create an array of grocery items
let shoppingList = ["eggs", "butter", "flour"];

// this arrow function takes a shopping list and a new item as inputs and adds the new item
// to the end of the list
const modifyItem = (list, newItem) => {
    // use the builtin push() method to add the new item to the end of the shopping list
    list.push(newItem);

    // display updated list in the console
    console.log("Updated shopping list:", list);
};

// prompt user to get the name of a new item to add
const userItem = prompt("Enter a new item to add to the shopping list:");

// validate the string to make sure it's not empty
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // call the function with the existing list and the new item to add
    modifyItem(shoppingList, userItem);
}