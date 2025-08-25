// script.js
// Name: Jake Smith
// Lab1 - Dynamic Age Calculator

//  this is a function definition called calculateAge. It has one parameter called year which is required to be
// provided when it's called.
function calculateAge(year) {
    // the line uses the builtin Date library to provide the current year and stores it in the const variable currentYear.
    const currentYear = new Date().getFullYear();
    // the return statement dictates what is returned when the function is called elsewhere in the code.
    return currentYear - year;
}


// The prompt function will trigger a popup modal that displays a message provides a text box for input.
// The user's input will be stored in the const variable for follow-on use.
const input = prompt("Enter your birth year (e.g., 2004):");

// the const variable birthyear stores the result of casting the user's input.
// It uses the Number function to essentially coerce the string input to a number type. If we pass something that's a not a number,
// it will be stored as NaN.
const birthYear = Number(input);


// this conditional handles the cases where the user has not provided any input or if they provided a string that's not a number.
if (input === null || Number.isNaN(birthYear)) {

    // console.log() prints the provided message to the console.
    // This can be useful for quick debugging but not ideal for legitimate error handling.
    console.log("No valid year provided.");
} else {
    // calls the calculateAge() function and passes in the valid birth year as an argument. It stores the result
    // in another const called age.
    const age = calculateAge(birthYear);


    // prints the message, passing age as an argument which appends it to the message.
    console.log("Your age is:", age);
}