// validation rules object(key by unique id)
// separates concerns and is scalable to add more rules
// note: got a little excited before I realized we only had to validate a couple fields with JS 😬
const rules = {
    // min length: 1, max length: 20
    fName: (value) => value.trim().length >= 1 && value.trim().length <= 20 ? null : "First name must be between 1-20 characters",
    lName: (value) => value.trim().length >= 1 && value.trim().length <= 20 ? null : "Last name must be between 1-20 characters",
    address1: (value) => value.trim().length > 0 ? null : "Must provide a valid address",
    city: (value) => value.trim().length >= 1 && value.trim().length < 30 ? null : "Enter a city name less than 30 characters",
    states: (value) => ["AZ", "HI", "MI", "TN", "TX"].includes(value) ? null : "Select a valid state",
    age: (value) => {
        const number = Number(value);
        // handle NaN case
        if (Number.isNaN(number)) return "Enter an age between 29-99";
        return number >= 29 && number <= 99 ? null : "Enter an age between 29-99"
    }, // hyphens optional ###-###-####
    phone: (value) => (/^\d{3}-?\d{3}-?\d{4}$/).test(value) ? null : "Enter a valid 10 digit phone number (123-456-7890)",
    // any characters that aren't @ or whitespace, literal @, any characters that aren't @ or whitespace, literal dot, any characters that aren't @ or whitespace
    email: (value) => (/^[^@\s]+@[^@\s]+\.[^@\s]+$/).test(value) ? null : "Enter a valid email",
    info: (value) => (value.length <= MAX_LENGTH && value.split("\n").length <= MAX_LINES) ? null : "Maximum character and/or line limit reached"
}

// text area character & line counter
const characterCounter = document.getElementById("characterCounter");
const lineCounter = document.getElementById("lineCounter");
const infoTextArea = document.getElementById("info");
const MAX_LENGTH = 30;
const MAX_LINES = 4;
// initialize counter text values
characterCounter.textContent = `0/${MAX_LENGTH} characters used (${MAX_LENGTH} remaining)` // set the initial value semi-dynamically
lineCounter.textContent = `0/${MAX_LINES} lines used (${MAX_LINES} remaining)`;

infoTextArea.addEventListener("input", () => {
    // don't let user enter more characters if max is reached
    const usedCharacters = infoTextArea.value.length;
    const charactersRemaining = MAX_LENGTH - usedCharacters;
    characterCounter.textContent = `${usedCharacters}/${MAX_LENGTH} characters used (${charactersRemaining} remaining)`;
    // determine line count by splitting the text content on each new line character and counting the tokens
    const usedLines = infoTextArea.value.split("\n").length;
    lineCounter.textContent = `${usedLines}/${MAX_LINES} lines used (${MAX_LINES - usedLines} remaining)`;
})

// grab all the inputs
const inputs = document.querySelectorAll("input, select, textarea");

// apply listeners to all inputs so that user is aware of issues before they submit
inputs.forEach((input) => {
    // run validation when inputs change
    input.addEventListener("input", () => {
        validateField(input);
    });

    // run validation when a user leaves the field
    input.addEventListener("blur", () => {
        validateField(input);
    })
})

// reference to the form
const form = document.querySelector("form");
// handle submit event
form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the default submission, we'll handle it

    let isFormValid = true; // the form is valid unless any rules fail

    // iterate through all the inputs and validate them against their rules
    // don't break early so all inputs that failed get a message/indicator
    inputs.forEach((input) => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    })

    if (isFormValid) {
        const formData = new FormData(form); // leverage the form data api to get the form as a nice node list
        console.log("Form Data:");

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`)
        }

    } else {
        console.error("Fix the errors 🤬")
    }
})

// helpers to display/remove error messages and add bootstrap classes
function showError(input, message) {
    let errorSpan = input.nextElementSibling;
    // create a span to display an error message if it doesn't already exist
    if (!errorSpan || !errorSpan.classList.contains("error")) {
        errorSpan = document.createElement("span");
        errorSpan.className = "error text-danger";
        input.after(errorSpan); // == ::after
    }

    errorSpan.textContent = message;
    // toggle bootstrap error classes for built-in formatting
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;
    // grab and remove the error span if it exists
    if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.remove();
    }
    // toggle bootstrap error classes
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}

// run an input field against its corresponding validator function
function validateField(input) {
    const rule = rules[input.id]; // get the matching rule
    if (!rule) return true; //skip if there's no rule

    const error = rule(input.value); // validate input

    if (error) {
        showError(input, error); // add error styling
        return false;
    } else {
        clearError(input); // remove error styling
        return true;
    }

}