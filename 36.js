// objects
// reference type
// array are good but not sufficient
// for real world data
// objects store key value pairs
// object don't have index
// how to create objects
// const person = {name:"Preeti",age:22}; // object literal
const person = {
    name:'Preeti',
    age: 22,
    hobbies: ['guitar','sleeping','listening music']
}
console.log(person); 
//age: 22
//hobbies: (4) ['guitar', 'sleeping', 'listening music', 'coding']
//name: "Preeti"
// console.log(typeof person); // object

// how to access data from objects
// console.log(person.name); // Preeti
// console.log(person.age); //22
// console.log(person.hobbies); // ['guitar', 'sleeping', 'listening music']
// console.log(person.hobbies.push("coding")); //4
// console.log(person.hobbies); // ['guitar', 'sleeping', 'listening music', 'coding']
console.log(person["name"]) //Preeti
console.log(person["age"])  //22
// how to add key value pair to objects

// person.gender = 'male';
// console.log(person);
//{name: 'Preeti', age: 22, hobbies: Array(3), gender: 'male'}
person['gender']= 'male';
console.log(person);
//{name: 'Preeti', age: 22, hobbies: Array(3), gender: 'male'}