// use const for creating array

// const pi = 3.14;
// console.log(pi); // 3.14
// pi = 12
// console.log(pi); // Assignment to constant variable

// heap memory me store hai ['apple','mango'] like 0x11,0x12
// const fruits = ['apple','mango'] // 0x11
// fruits.push('banana');
// console.log(fruits);  // ['apple', 'mango', 'banana']

// use const ================================= because less error
const fruits = ['apple','mango'] // 0x11
fruits = ['grapes', 'pineapple'] // Assignment to constant variable
fruits.push('banana');
console.log(fruits);