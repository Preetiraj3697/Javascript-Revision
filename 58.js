// filter method

const numbers = [1,3,4,5,6,7,2,8,9];
// const isEven=(number)=>{
//    return number%2===0;
// }
// const even = numbers.filter(isEven)
// console.log('even: ', even);  // even:  (4) [4, 6, 2, 8]



 const even = numbers.filter((number)=>{
    return number%2===0
 })
 console.log('even: ', even);  even:  (4) [4, 6, 2, 8]