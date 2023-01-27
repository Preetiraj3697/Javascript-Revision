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