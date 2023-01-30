// map method

const numbers = [3,4,5,6,7,9,8];

const square = function(number){
    return number*number;
}
const squareNumber = numbers.map(square);
console.log('squareNumber: ', squareNumber);
