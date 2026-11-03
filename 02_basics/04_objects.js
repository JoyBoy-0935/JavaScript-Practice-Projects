// Singleton object:
const newUser = new Object()

// Object literal:
const tinderUser = {
    name: {
        firstName: "Luffy",
        middleName: "Dragon",
        lastName: "Monkey"
    },
    email: "joyboy0935@gmail.com",
    age: 19
}

// Nested Object:
// console.log(tinderUser.name);
// console.log(tinderUser.name.lastName);

// Ways of combining objects:
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    3: "e",
    5: "f"
}

// 1: Simply including:
    // const resultObject = {obj1, obj2, obj3}

// 2: Object.assign()
    // const resultObject = Object.assign({}, obj1, obj2, obj3); 
    // is a static method that6 copies all the properties from one or more source objects to a target object. It returns the modified target object.

// 3: Spread Method (Most preferred):   
    const resultObject = {...obj1, ...obj2, ...obj3}

/* PTR: Usually the database returns the array of objects */

const keyArr = Object.keys(tinderUser) // stores the keys of the object in an array
// console.log(keyArr);

const valueArr = Object.values(tinderUser)
// console.log(valueArr)

const entryArr = Object.entries(tinderUser)
// console.log(entryArr)

// console.log(tinderUser.hasOwnProperty("age")) // returns true if that key is present.


/* Destructuring of object */

const course = {
    name: "JavaScript",
    courseInstructor: "Hitesh",
    duration: "1year"
}

console.log(course.courseInstructor);
// instead
const {courseInstructor: instructor} = course
    // propertyName: givenName

console.log(courseInstructor);

/*PTR: JSON format basically returns objects or array of object only difference is that it doesn't have a name like the js object */
