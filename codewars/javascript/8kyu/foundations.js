// Write a function "greet" that returns "hello world!"
function greet() {
    return "hello world!"
}

function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
}

// rock, paper, scissors
const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";

    if (p1 === 'scissors' && p2 === 'paper') return "Player 1 won!";

    if (p1 === 'paper' && p2 === 'rock') return "Player 1 won!";

    if (p1 === 'rock' && p2 === 'scissors') return "Player 1 won!"

    return "Player 2 won!";
};

// has at least one
function check(a, x) {
    // your code here
    return a.includes(x);
}

function areYouPlayingBanjo(name) {

    return name + `${name.toLowerCase().charAt(0) === 'r' ? " plays " : " does not play "}` + "banjo"
}

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const avg = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / classPoints.length;

    return yourPoints > avg;
}

function hero(bullets, dragons){
//Get Coding!
    return bullets >= (2 * dragons);
}

function stringToArray(string){

    // code code code
    return string.split(' ');

}

function abbrevName(name){
    const splitName = name.toUpperCase().split(' ');
    return `${splitName[0].charAt(0)}.${splitName[1].charAt(0)}`
}

function sumMix(x){

    return x.reduce((accumulator, currentValue) => accumulator += Number.parseInt(currentValue), 0);

}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    return fuelLeft >= distanceToPump / mpg;
};

const reverseSeq = n => {
    const sequence = [];

    for (let i = n; i > 0; i--) {
        sequence.push(i);
    }

    return sequence;

};

const stringToNumber = function(str){
    return Number.parseInt(str);
}