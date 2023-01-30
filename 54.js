// callback functions
function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}
function myFunc(callback){
    console.log('hello there')
    callback("preeti"); 
}
//hello there  54.js.6
//inside my func 2 54.js.3
// your name is preeti 54.js.4
myFunc(myFunc2);