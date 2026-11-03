// Immediately Invoked funciton expression:

// (function definition) ()--> for immediate execution.


/* Named IIFE */
(function dbms1() {
    console.log("Connected to database 1")
})(); // Semicolon is very important here.


/* Unamed IIFE */
((name) => {
    var company = "bihar" // IIFE creates a private scope to keep variables separate and prevent them from interfering with global variables.
    console.log(`${name} was the first pirate.`)
})("joyboy");

console.log(company)