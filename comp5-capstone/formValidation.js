// validation rules (key by unique id)
const rules = {
    // min length: 1, max length: 20
    fName: (value) => value.trim().length >= 1 && value.trim().length <= 20 ?
        null : "First name must be between 1-20 characters",
    lName: (value) => value.trim().length >= 1 && value.trim().length <= 20 ?
        null : "Last name must be between 1-20 characters",
    address1: (value) => value.trim().length > 0 ? null : "Must provide an address",
    city: (value) => value.trim().length >= 1 && value.trim().length < 30 ? null : "Enter a city name less than 30 characters",
    states: (value) => ["AZ", "HI", "MI", "TN", "TX"].includes(value) ? null : "Select a valid state",
    age: (value) => {
        const number = Number(value);
        return number >= 29 && number <= 99 ? null : "Enter an age between 29-99"
    },
    // hyphens optional
    phone: (value) => (/^\d{3}-?\d{3}-?\d{4}$/).test(value) ? null : "Enter a valid 10 digit phone number",
    email: (value) => (/^[^@\s]+@[^@\s]+\.[^@\s]+$/).test(value) ? null : "Enter a valid email",
}

// grab all the inputs
const inputs = document.querySelectorAll("input, select");

inputs.forEach((input) => {
    // run validation when inputs change
    input.addEventListener("input", () => {
        validateField(input);
    });

    // run validation when user leaves the field
    input.addEventListener("blur", () => {
        validateField(input);
    })
})

// reference to the form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stop the default submission, we'll handle it

    let isFormValid = true; // form is valid unless any rules fail

    // iterate through all the inputs and validate them against their rules
    // don't break early so all inputs that failed get a message/indicator
    inputs.forEach((input) => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    })

    if (isFormValid) {
        form.submit();
    } else {
        console.error("Fix the errors 🤬")
    }
})

// helpers to display/remove error messages and add bootstrap classes
function showError(input, message) {
    let errorSpan = input.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains("error")) {
        errorSpan = document.createElement("span");
        errorSpan.className = "error text-danger";
        input.after(errorSpan);
    }

    errorSpan.textContent = message;
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
}

function clearError(input) {
    const errorSpan = input.nextElementSibling;

    if (errorSpan && errorSpan.classList.contains("error")) {
        errorSpan.remove();
    }
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
}

function validateField(input) {
    console.log('running validation')
    const rule = rules[input.id]; // get correct rule
    if (!rule) return; //skip if there's no rule
    const error = rule(input.value); // validate input
    if (error) {
        showError(input, error); // add error styling
        return false;
    } else {
        clearError(input); // remove error styling
        return true;
    }

}