// Singleton Object:
//Object.create



// Object literals:

const pirate = {
    name: "Luffy",
    "full name": "Monkey D. Luffy",
    // [mySymbol]: "id"  Symbol
    age: 19,
    isPirate: true,
    mealTiming: [9 , 11, 2, 4, 7, 8],
    greetings: function() {
        console.log(`${this.name} is going to be the king of the pirates`)
    }
}
// console.log(pirate.name) // generally not preffered as much.
// console.log(pirate["name"]) // generally preffered.
/* console.log(pirate.full name)  NOT POSSIBLE.
console.log(pirate."full name") */
// console.log(pirate["full name"])


// concept of symbols: is a primitive datatype in JavaScript used to create unique values.

const mySymbol = Symbol("key1") // key1 => description is just a label you choose to make your code easier to understand. it is optional and meant for humans, not for JavaScript's functionality.

pirate[mySymbol] = "myKey1"

// console.log(pirate)
// console.log(pirate[mySymbol])

// Object.freeze(pirate) // Locks the object, know you cannot edit or update the object.

pirate.greetings();



