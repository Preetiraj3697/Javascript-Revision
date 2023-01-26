// array destructuring

// const myArray = ['value1','value2','value3'];
// const myvar1 = myArray[0];
// const myvar2 = myArray[1];
// console.log('value of myvar1',myvar1);
// console.log('value of myvar2',myvar2);
// value of myvar1 value1
// value of myvar2 value2
//=============================
// let [myvar1, myvar2] = myArray;

// console.log('value of myvar1',myvar1);
// console.log('value of myvar2',myvar2);

// value of myvar1 value1
// value of myvar2 value2
// myvar1 = 'value changed';
// console.log('value of myvar1',myvar1);
// console.log('value of myvar2',myvar2);
// value of myvar1 value changed
// value of myvar2 value2


const myArray = ['value1','value2','value3','value4','value5'];
// let [myvar1, , myvar2] = myArray;
// console.log('value of myvar1',myvar1);
// console.log('value of myvar2',myvar2);
// value of myvar1 value1
// value of myvar2 value3
// =================
// let [myvar1, , myvar2] = myArray;
// let mynewArary = myArray.slice(2);
// console.log(mynewArary) // value3
// ======================
let [myvar1, myvar2, ...myNewArray] = myArray;
console.log('value of myvar1',myvar1);
console.log('value of myvar2',myvar2);
console.log(myNewArray)

// value of myvar1 value1
// value of myvar2 value2
// ['value3','value4','value5']




