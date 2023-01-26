// primitive vs reference data types
// primitive types // unmuteable
let num1 = 6;
let num2 = num1;
// console.log("value is num1 is", num1); //6
// console.log("value is num2 is ", num2); //6
// num1++;
// console.log("after incrementing num1");
// console.log("value is num1 is", num1); //7
// console.log("value is num2 is ", num2); //6

// reference data types // muteable
// array
let array1 = ['item1','item2'];
let array2 = array1;
console.log('value is array1 is ', array1);
console.log('value is array2 is', array2);
array1.push('item3');
console.log('after pushing element to array1')
console.log('value is array1 is ', array1);
console.log('value is array2 is', array2);


// primitive
// store in stack 
// stack is storing data

// reference types
// store in heap
// like a node
