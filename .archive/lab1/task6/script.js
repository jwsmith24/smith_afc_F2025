// script.js
// Name: Jake Smith
// Task5 - Temperature Classifier

// create a function called classifyTemperature that takes a temp (in Celsius) as an input
function classifyTemperature(celsius) {
    // convert the provided temp to degrees F
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // use conditional logic to return an appropriate temperature description
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// prompt the user to enter a temp in C
const input = prompt("Enter temperature in Celsius:");

// coerce input to be a number
const celsius = Number(input);

// validate the input by checking to make sure that celsius is a number
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // if input is good, call the function on the input and store the result in a const variable
    const classification = classifyTemperature(celsius);

    // log the result to the console
    console.log("The temperature is:", classification);
}