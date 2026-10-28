const strawHats = ["luffy", "Zoro", "Nami", "Ussop"]
const whiteBeards = ["newgate", "marco", "ace", "tech"]

// strawHats.push(whiteBeards)
// console.log(strawHats) // Array ke andar array
// console.log(strawHats[4][2])

/* concept of spread method || Limitation: Can only add one array at a time. */
const result = strawHats.concat(whiteBeards) // returns a new array with all the elements.
// console.log(result)

/* concept of spread method || can add multiple elements */
const legends = [...strawHats, ...whiteBeards]
// console.log(legends)

const anotherArr = [1, 2, 3, 4, [5, 6, 7, 8, 9], [7, [8, [9]]]] // Nested array...
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr)


console.log(Array.isArray("JoyBoy..."))
console.log(Array.from("JoyBoy..."))
console.log(Array.from({name : "JoyBoy"})) // Object: interesting

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) // returns a new Array from a set of elements.