function one () {
    const name = "joyboy"

    function two() {
        const website = " youtube"
        console.log(name + youtube)
    }
    // console.log(website) throws error -> out of scope
}

/***********************************************************************/

console.log(addOne(5)) // Doesn't throw error.
function addOne(num) {
    return num + 1
}

console.log(addTwo(5)) // Throws error.
const addTwo = function (num) {
    return num + 2
}