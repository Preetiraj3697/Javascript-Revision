// hoisting
// hello();
// // function declaration
// function hello(){
//     console.log("hello world");
// }
// hello();
// hello();
// const hello = function(){
//     console.log("hello world")
// }
// hello(); //47.js:8 Uncaught ReferenceError: Cannot access 'hello' before initialization

// hello();
// let hello = function(){
//     console.log("hello world")
// }
// hello(); //47.js:8 Uncaught ReferenceError: Cannot access 'hello' before initialization

// hello();
// var hello = function(){
//     console.log("hello world")
// }
// hello(); //47.js:20 Uncaught TypeError: hello is not a function

// console.log(hello); // undefined
// var hello = "hello world";
// console.log(hello); // hello world

// console.log(hello); // 47.js:30 Uncaught ReferenceError: Cannot access 'hello' before initialization
// let hello = "hello world";
// console.log(hello); 

console.log(hello); // 47.js:30 Uncaught ReferenceError: Cannot access 'hello' before initialization
const hello = "hello world";
console.log(hello); 