// script.js
// Name: Jake Smith
// Lab1 - Dynamic Age Calculator

// Step 1: Create a traditional function to calculate age

// my take: this is a function definition called calculateAge. It has one parameter called year which is required to be
// provided when its called.
function calculateAge(year) {
    // Step 2: Get the current year from the system clock
    // my take: the line uses the builtin Date library to provide the current year and stores it in the const variable currentYear.
    const currentYear = new Date().getFullYear();

    // Step 3: Subtract the birth year from the current year

    // my take: the return statement dictates what is returned when the function is called elsewhere in the code.
    return currentYear - year;
}

// Step 4: Prompt the user to enter their birth year

// My take: The prompt function will trigger a popup modal that displays a message provides a text box for input.
// The user's input will be stored in the const variable for follow-on use.
const input = prompt("Enter your birth year (e.g., 2004):");

// Step 5: Convert the input (which is a string) into a number

// My take: the const variable birthyear stores the result of casting the user's input.
// It uses the Number function to essentially coerce the string input to a number type. If we pass something that's a not a number,
// it will be stored as NaN.
const birthYear = Number(input);

// Step 6: Check if the input is valid (not empty or invalid)

// my take: this conditional handles the cases where the user has not provided any input or if they provided a string that's not a number.
if (input === null || Number.isNaN(birthYear)) {
    // Step 7: If input is missing or not a number, display a message

    // my take: console.log() prints the provided message to the console.
    // This can be useful for quick debugging but not ideal for legitimate error handling.
    console.log("No valid year provided.");
} else {
    // Step 8: If input is valid, call the function to calculate age

    // my take: calls the calculateAge() function and passes in the valid birth year as an argument. It stores the result
    // in another const called age.
    const age = calculateAge(birthYear);

    // Step 9: Display the result in the console

    // my take: prints the message, passing age as an argument which appends it to the message.
    console.log("Your age is:", age);
}