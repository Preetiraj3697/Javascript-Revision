// intro to arrays
// reference type
// how to create arrays

// ordered collection of items
// let fruits = ["apple","mango","grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,3,4,"string",null,undefined,[1,2,3,4]]
// console.log(mixed);
// console.log(numbers)
// console.log(fruits)
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

let fruits = ["apple","mango","grapes"];
let obj = {} // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits) // object
console.log(Array.isArray(fruits)) // true
console.log(Array.isArray(obj)); //false
// array indexing