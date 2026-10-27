// Concept of String interpolation:
let name = "JoyBoy"
let age = 19

// console.log(`My channel name is ${name}.toUpperCase()} an my age is ${age}`);

// Another way to declare the String:
const pirate = new String('JoyBoy'); // 
// console.log(pirate[0]);
// console.log(pirate.__proto__);
// console.log(pirate.length);
// console.log(pirate.charAt(5));
// console.log(pirate.indexOf("y"));


const newPirate = pirate.substring(2 , 5);
// console.log(newPirate)

let anotherPirate = pirate.slice( -8 , 4)
// console.log(anotherPirate)

const lecturer = "    Chai aur Code    "
console.log(lecturer)
console.log(lecturer.trim())
console.log(pirate.replace("Boy" , "Man"))
console.log(pirate.includes("Boy"))

/* Try to revist and read all the methods of the strings during the interview */