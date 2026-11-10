let emailID = "joyboy0935@gmail.com"

if(emailID) {
    // console.log("successfully fetched the email id.")
}else{
    console.log("fetching unsuccessful")
}


/* Truthy value: the values which are assumed to be true.
    1. "0"
    2. "false"
    3. " "
    4. []
    5. {}
    6. function() {}

   Falsy value: the values which are assumed to be false.
    1. false
    2. 0 & -0
    3. BigInt 0n
    4. ""
    5. null
    6. undefined
    7. NaN

PTR:false == 0 --> true
    false == "" --> true
    "" == 0 --> true
*/

// Condition to check whether an array is empty or not:
let emptyArr = [];
if(emptyArr.length === 0) {
    // console.log("Array is empty.")
}

// Condition to check whether an object is empty or not:
let emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty.")
}

// Nullish Coalescing Operator(??): null undefined
let value;
    // value = 10 ?? 5;
    // value = null ?? 10
    // value = undefined ?? 20
    // value = null ?? 10 ?? 20
    // value = undefined ?? null
    // console.log(value);

// Ternary Operator:
    // condition ? true : false
const icedTeaPrice = 100
icedTeaPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is greater than 80")