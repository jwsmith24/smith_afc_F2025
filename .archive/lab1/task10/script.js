// script.js
// Name: Jake Smith
// Task10 - How Long Until Graduation

// create a helper arrow function that does not take any input to get the current date
const getToday = () => {
    return new Date();
};

// get the current date by calling the helper function
const today = getToday();

// more concise version of task 9.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// create a list of the months that maps to the results of getMonth()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// use built in methods to get year, month, and date
const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// leverage switch statement to concisely add the correct suffix to the date
// arrow function getSuffix takes a date (number) as an input
const getSuffix = (n) => {
    // look at both digits, if the day is the 11th, 12th, or 13th, append th
    if ([11, 12, 13].includes(n % 100)) return "th";
    // look at the last digit and append the appropriate suffix (teens are already handled)
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

// create a formatted date string to display
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// log the current day and formatted date to the console
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// get a date object for the graduation date of the course
const graduationDate = new Date("2025-11-13");

// figure out how many days until graduation
const diff = graduationDate - today;
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// format a message to log to the console
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");