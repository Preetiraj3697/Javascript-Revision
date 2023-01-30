// important array methods

//forEach
// map
// filter
// reducer

const numbers = [4,5,6,8,9];

function multiplyBy2(number,index){
    console.log("index is", index);
    console.log(`${number}*2 = ${number*2}`);
}
// for(let i=0; i<numbers.length; i++){
//     multiplyBy2(numbers[i],i);
// }
numbers.forEach(multiplyBy2);

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