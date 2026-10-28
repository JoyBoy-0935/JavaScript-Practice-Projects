// JavaScript provides a built-in Date object to work with dates and time.

let myDate = new Date();
 
// console.log(typeof (myDate)) // object.
// console.log(myDate) 
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

let birthDate = new Date(2007 , 3 , 5 , 2 , 30) // FORMAT: (yyyy , mm(0 - 11) , dd , hr , min)
let anotherDate = new Date("2029-4-5") // PTR: the order of month here starts from 1-12.
let anotherAnotherDate = new Date("04-05-2007")
// console.log(birthDate.toLocaleString());

// cocept of TimeStamp:
let myTimeStamp = Date.now(); // returns the value of milliseconds from 1st Jan 1970 till now.

// console.log(typeof myTimeStamp) // Number
// console.log(myTimeStamp)
// console.log(birthDate.getTime()) // returns the value of milliseconds from 1st Jan 1970 till the specific date.
// console.log(Math.round(Date.now() / 1000)) // Value in seconds 

console.log(myDate.getMonth() + 1); // from 0 - 11
console.log(myDate.getDay()) 
// and many more ...

