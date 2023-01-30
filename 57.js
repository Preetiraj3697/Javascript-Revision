// // map method

// const numbers = [3,4,5,6,7,9,8];

// const square = function(number){
//     return number*number;
// }
// const squareNumber = numbers.map(square);
// console.log('squareNumber: ', squareNumber);  // squareNumber:  (7) [9, 16, 25, 36, 49, 81, 64]


const numbers = [3,4,5,6,7,9,8];

const squareNumber = numbers.map((number)=>{
    return number*number;
});
console.log('squareNumber: ', squareNumber);  // squareNumber:  (7) [9, 16, 25, 36, 49, 81, 64]
