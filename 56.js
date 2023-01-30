// important array methods

//forEach
// map
// filter
// reducer

// const numbers = [4,5,6,8,9];

// function multiplyBy2(number,index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// // for(let i=0; i<numbers.length; i++){
// //     multiplyBy2(numbers[i],i);
// // }
// numbers.forEach(multiplyBy2);

// 56.js:11 index is 0
// 56.js:12 4*2 = 8
// 56.js:11 index is 1
// 56.js:12 5*2 = 10
// 56.js:11 index is 2
// 56.js:12 6*2 = 12
// 56.js:11 index is 3
// 56.js:12 8*2 = 16
// 56.js:11 index is 4
// 56.js:12 9*2 = 18


// const numbers = [4,5,6,8,9];

// function multiplyBy2(number,index){
//     console.log("index is", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for(let i=0; i<numbers.length; i++){
//     multiplyBy2(numbers[i],i);
// }
//=====================
// numbers.forEach(function(number,index){
//     console.log(`${number}*3 is ${number*3} index is ${index}`)
// });

const users = [
    {firstName:"preeti",age:23},
    {firstName:"paarthav",age:21},
    {firstName:"anushka",age:17},
    {firstName:"Babita",age:19},
]
// users.forEach(function(user){
//     console.log(user.firstName)
// })
// same with for of loop
// for(let user of users){
//     console.log(user.firstName);
// }
// same with arrow function
users.forEach((user,index)=>{
    console.log(user.firstName,index)
})