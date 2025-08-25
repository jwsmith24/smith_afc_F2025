// script.js
// Name: Jake Smith
// Task3 - Favorite Color Selector

// create an area called colors. Uses let here instead of const which means we can reassign it later.
// it's initialized with 3 string literals: red, blue, and green
let colors = ["red", "blue", "green"];

// this function takes an array of colors as an input and adds a new color to the front of it.
function addColor(colorArray) {
    // get a color from the user and store it into a const variable
    const newColor = prompt("Enter a color to add:");

    // add the new color to the front of the array. unshift is a builtin method that does this for us.
    // there's no error checking though, so this could potentially add null values
    colorArray.unshift(newColor);

    // log the updated colors array to the console
    console.log("Updated colors:", colorArray);
}

// actually call the function to run it when the script executes
addColor(colors);