// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     let firstName = "preeti";
//     console.log(firstName) // preeti
// }
// //console.log(firstName) // firstName is not defined

// {
//     let firstName = "paarthav";
//     console.log(firstName) // paarthav
// }

// const firstName = 'garima';
// console.log(firstName) // garima


// {
//     var firstName = "preeti";
    
// }
// console.log(firstName) // preeti

// {
//     var firstName = "preeti";
    
// }
// {
// console.log(firstName) // preeti
// }

// {
//     let firstName = "preeti";
    
// }
// {
// console.log(firstName) // firstName is not defined
// }

// if(true){
//     let firstName = 'harshit';
//     console.log(firstName);
// }
// console.log(firstName) // firstName is not defined

// if(true){
//     var firstName = 'harshit';
//     console.log(firstName);
// }
// console.log(firstName) // harshit
// let firstName = 'preeti'
function myApp(){
    if(true){
        let firstName = 'harshit';
        console.log(firstName);
    }
    console.log(firstName) // 50.js:60 Uncaught ReferenceError: firstName is not defined

}
myApp();