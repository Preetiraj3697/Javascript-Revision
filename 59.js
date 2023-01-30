// reduce

const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array
// 

const sum = numbers.reduce((accumulator,currentValue)=>{
    
    return accumulator+currentValue
})

console.log('sum: ', sum); //15

// accumulator, currentValue , return 
// 1          ,  2           , 3
// 3          ,  3           , 6
// 6          ,  4           , 10
// 10         ,  5           , 15
// than return 15