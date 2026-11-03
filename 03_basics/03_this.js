const user = {
    username: "Adam",
    age: 2026,

    welcome: function() {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
// user.welcome()

// PTR: returns a empty object in the nodejs but returns window object in the console of the windows.
// console.log(this)

function fuck() {
    const username = "Alok"
    // console.log(this)
    // console.log(this.username)  // You cannot use this keyword in the function.
}
fuck()

const fuckArrow = ()=> {
    // console.log(this) // this does't work in the arrow function.
}