let score = "33abc"; // in Frontend we know that it is a integer. But it is not possible while in the backend.

// Ways:
//console.log(typeof score);
//console.log(typeof (score));

let valueIntoNumber = Number(score);

//console.log(typeof valueIntoNumber , valueIntoNumber); // So the type of NaN is also numnber.{BE CAREFULL} 

/*Investigation Study:
    "33" => 33
    "33abc" => NaN
    null => 0
    undefined => NaN
    true/false => 1/0
*/

let isLoggedIn = "";

let boooleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(typeof boooleanIsLoggedIn , boooleanIsLoggedIn);
/* Investigation Study:
    1 => true
    0 => false
    "Joyboy" => true
    "" => false
*/

// ***************** Operations *****************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log("2" + 1 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // 1
// console.log(true+); // throws error

// console.log(+""); // 0


