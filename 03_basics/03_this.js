const user = {
    username: "Adam",
    age: 2026,

    welcome: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcome()

// console.log(this)
// PTR: this keyword returns a empty object in the nodejs but returns window object in the console of the windows.

function fuck() {
    const username = "Alok"
    // console.log(this)
    // console.log(this.username)  // You can use this keyword in the function.
}
fuck()

const fuckArrow = ()=> {
    // console.log(this) // this works perfectly fine in arrow functions! The difference is that arrow functions don't have their own this. They inherit this from their surrounding lexical scope.
}