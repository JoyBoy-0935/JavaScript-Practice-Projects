function sayMyName() {
    console.log("JoyBoy")
}

// sayMyName -> reference
// sayMyName() -> executes the function

function loggedIn (userName) { // if no argument is passed then it is considered undefined not null
    if(userName === undefined) {  // undefined is by default false -> if(!undefined) {} can also a condition.
        console.log("Please enter a valid username...");
        return
    }
    return `${userName} just logged in`
}

// console.log(loggedIn())
// console.log(loggedIn("JoyBoy"))

/******************************************************************/

// '...' is known as spread as well as rest operator depending upon the use case.

function priceOfCartItems(value1, value2, ...price) {  // rest operator
    return price
}

// console.log(priceOfCartItems(100, 10, 20, 3000, 400))

// function to handle Objects
const obj = {
    name: "John",
    age: 29
}

function handleObject(anyObject) {
    console.log(`My name is ${anyObject.name} and I'm ${anyObject.age} years old.`)
}

handleObject(obj)
handleObject({
    name: "Eve",
    age: NaN
})

// PTR: Same can be done for array.