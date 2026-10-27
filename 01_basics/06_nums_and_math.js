const score = 55

// Another way for defining an number:

const balance = new Number(100) // Object.
// console.log(score)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed()) // returns a string representing the given number using fixed-point notation.

const otherNumber = 654321.6595

// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toLocaleString("en-IN"));
/*
    ON BROWSER CONSOLE:
Number has many function associated with it.
1) Number.MAX_VALUE
2) Number.MIN_VALUE
3) Number.MAX_SAFE_INTEGER
4) Number.MIN_SAFE_INTEGER
    and many more ...
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Math is a by default library of JavaScript:
// console.log(Math);

// console.log(Math.abs(-5)) // abs(Absolute): converts the -ve number to +ve and doesn't change the +ve nos.
// console.log(Math.round(5.56)) // round: round ups the decimal value.
// console.log(Math.ceil(4.1)) // rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.floor(4.9)) // rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.min(5, 4, 3, 2, 1)) 
// console.log(Math.max(5, 4, 3, 2, 1)) 

// console.log(Math.random())
// console.log(Math.floor(Math.random()))

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min + 1)) + min)