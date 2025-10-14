// script.js
// Name: Jake Smith
// Lab2 - Simple Interest Calculator

// this function takes the principal amount, interest rate, and time as inputs
// returns the result of the calculation
function calculateSimpleInterest(principal, rate, time) {
    // Formula: (Principal × Rate × Time) / 100

    // my take: returns the simple interest
    return (principal * rate * time) / 100;
}

// gets the principal amount from the user and coerces it to a number
const principal = Number(prompt("Enter the principal amount:"));

// gets the interest rate form the user and coerces it to a number
const rate = Number(prompt("Enter the rate of interest:"));

// gets the time of the loan period from the user and coerces it to a number
const time = Number(prompt("Enter the time in years:"));

// calls the simple interest function with the provided values, stores result in const
// variable called interest
const interest = calculateSimpleInterest(principal, rate, time);

// my take: prints the calculated interest to the console
console.log("Your simple interest is:", interest);