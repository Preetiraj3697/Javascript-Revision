//param destructuring

// object
// react

const person = {
    firstName:"Paarthav",
    gender: 'male',
}

// function printDetails(obj){
//     console.log(obj.firstName); // paarthav
//     console.log(obj.gender);   // male
// }
// printDetails(person); 

function printDetails({firstName,gender,age}){
    console.log(firstName); // paarthav
    console.log(gender);   // male
    console.log(age); // undefined
}
printDetails(person); 