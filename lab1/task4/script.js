// script.js
// Name: Jake Smith
// Task4 - Event Countdown with Date Object

// this function takes a date as an input and returns how many days until that date
function calculateDaysUntil(eventDate) {
    // the default date constructor will return a date object for the current day
    const today = new Date();

    // coerce the provided event date into a date object
    const event = new Date(eventDate);

    // calculate the time difference between the event and the current day (returns milliseconds)
    const diff = event - today;

    // convert the difference in ms to days and round up to nearest whole number
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // returns the rounded days
    return days;
}

// prompt the user to enter a date
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// validate the input with a regex
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

// prompt the user to enter a valid date until the enter a valid date
// leverages the builtin test function to ensure a string matches the regex pattern
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// calls the function to calculate days between today and the event day
const daysRemaining = calculateDaysUntil(eventDate);

// log the days remaining to the console
console.log("Days until the event:", daysRemaining);