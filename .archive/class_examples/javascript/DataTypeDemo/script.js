
console.log("hi");

// numbers
// two ways to coerce data

let input = "24";
let parsedNumber = Number(input);

console.log(typeof parsedNumber);

let newInput = '34cat';
let parsedAgain = Number(newInput);
console.log(parsedAgain);

let betterParsed = parseInt(newInput);
console.log(betterParsed)


let test = false;
console.log(test)