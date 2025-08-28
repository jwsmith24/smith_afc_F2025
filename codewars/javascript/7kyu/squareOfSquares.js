
// 25 is square (5*5)
// 3 is not square

const isSquare = function(n) {
    if (n < 0) return false;

    return Number.isInteger(Math.sqrt(n)); // does it have an integer square root?

}

console.log(isSquare(4));
console.log(isSquare(3));
console.log(isSquare(44));
console.log(isSquare(71));