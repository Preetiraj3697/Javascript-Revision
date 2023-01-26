// how to clone array
// how to concatenate two array

// let array1 = ['item1','item2'];
// let array2 = array1;
// console.log(array1===array2) // true;
// array1.push('item3');
// console.log(array1);
// console.log(array2);
// let array1 = ['item1','item2'];
// let array2 = ['item1','item2'];
// console.log(array1===array2) // false
// array1.push('item3');
// console.log(array1);
// console.log(array2);
//=======================================Fast
// let array1 = ['item1','item2'];
// let array2 = array1.slice(0);
// array1.push('item3')
// console.log(array1===array2); //false
// console.log(array1);
// console.log(array2);
//===================================
// let array1 = ['item1','item2'];
// let array2 = [].concat(array1);
// array1.push('item3')
// console.log(array1===array2); //false
// console.log(array1);
// console.log(array2);
//===================================popular
// let array1 = ['item1','item2'];
// let array2 = [...array1]; // spread operator
// array1.push('item3')
// console.log(array1===array2); //false
// console.log(array1);
// console.log(array2);
//============================two array concat
let array1 = ['item1','item2'];
// let array2 = array1.slice(0).concat(['item3','item4']);
// let array2 = [].concat(array1,['item3','item4'])
//new way
// spread operator
let array2 = [...array1, 'item3','item4']
let array3 = [...array1,...array2]
array1.push('item3')
console.log(array1===array2); //false
console.log(array1); // ['item1', 'item2', 'item3']
console.log(array2); // ['item1', 'item2', 'item3', 'item4']
console.log(array3); // ['item1', 'item2', 'item1', 'item2', 'item3', 'item4']