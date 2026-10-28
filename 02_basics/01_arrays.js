// concept of Arrays:
/*
   -> An array is an object.(array ke  ander array bhi ho sakte hai)
   -> Stores a collection of different items under a same variable name.
   -> Javascript arrays are resizable and can contain a mix of different datatypes.
   -> JavaScript array-copy-operations creates shallow copies.
        (1) Shallow Copy: of an object is an copy whose properties share the same reference.
        (2) Deep Copy: of an object is an copy whose properties do not share the same reference.

*/
let myArr = [1, 2, 3, 4, 5, true, "JoyBoy"];
let myArr2 = new Array(1, 2, 3, 4,)

// Array Methods:
// console.log(myArr.length)

myArr2.push(5) // Adds an element at the end.
// console.log(myArr2)

myArr2.pop() // removes the last element
// console.log(myArr2)

myArr2.unshift(9) // adds an element at the begining.
// console.log(myArr2)

myArr2.shift() // removes the first element.
// console.log(myArr2)

// console.log(myArr2.includes(3))
// console.log(myArr2.indexOf(4))


let newArr = myArr2.join()
// console.log(typeof newArr , newArr)

// slice and splice:
console.log("A: " , myArr2)

console.log(myArr2.slice(1, 3))

console.log("B: " , myArr2)

console.log(myArr2.splice(1, 2)) // Takes a portion without changing the original.

console.log("C: " , myArr2) //  Changes the original array. Parmeter => (position, deleteCount, ele1, ele2, ele3, ...)


