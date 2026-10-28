/* There are two types of memory:
    1) Stack:
    => Primitive datatypes.
    => You get a copy the variable.

    2) Heap:
    => Non Primitive datatypes.
    => you directly get the reference of the original value.
*/


// Stack:
let emailOne = "joyboy7922@gmail.com"
let emailTwo = emailOne

emailTwo = "joyboy0935@gmail.com"

console.log(emailOne);
console.log(emailTwo);


// Heap:
let userOne = {
    age: "22yrs",
    dept: "SQL"
}

let userTwo = userOne

userTwo.dept = "noSQL";

console.log(userOne);
