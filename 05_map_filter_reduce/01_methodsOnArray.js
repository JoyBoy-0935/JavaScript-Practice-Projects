let arr = [1, 2, 3, 4, 5, 6]

let newArr1 = arr.map((element) => {
    return element + 1;
});
console.log(newArr1);

let newArr2 = arr.filter((element) => {
    return element % 2 == 0;
});
console.log(newArr2);

let newArr3 = arr.reduce((accumulator, element) => {
    return accumulator + element;
}, 0);
console.log(newArr3);