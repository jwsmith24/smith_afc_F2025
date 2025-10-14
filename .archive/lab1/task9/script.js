// script.js
// Name: Jake Smith
// Task9 - Weekday Detector

// this arrow function takes no input and returns the current day
const getWeekday = () => {
    // get today's date
    const today = new Date();

    // use the builtin getDay() method to get the current day of the week (expressed as a number 0-6
    const dayNumber = today.getDay();

    // store the list of weekdays in a const variable that maps nicely to the results of the getDay() function
    // this should probably be defined outside getWeekday so it's not redefined everytime the function is called.
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // return the string with the current day
    return days[dayNumber];
};

// log the result of calling the function to get the current day
console.log("Today is:", getWeekday());