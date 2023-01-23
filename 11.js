//undefined
//null

let firstName;
console.log(typeof firstName); // undefined
firstName = "preeti";
console.log(typeof firstName, firstName);


// null

let myVariable = null;
console.log('myVariable: ', myVariable); //myVariable: null;
console.log(typeof myVariable); //object;
//bug, error


//BigInt
let myNumber = BigInt(234534534534634634634);
let sameMyNumber = BigInt(12);
let againNumber = 123n;
// console.log(myNumber);
// console.log(myNumber);
//  when againNumber is 123. console.log(sameMyNumber+againNumber) //11.js:24 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions at 11.js:24:25
console.log(sameMyNumber+againNumber)
