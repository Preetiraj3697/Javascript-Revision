// how to iterate object
const person = {
    name:'Preeti',
    age: 22,
    "person hobbies": ['guitar','sleeping','listening music']
}

// for in loop
// object.keys
// for(let key in person){
//     // console.log(key)
//     //  name
//     //  age
//     //  person hobbies
//      console.log(person[key]);
//      // Preeti
//      // 22
//      // (3) ['guitar', 'sleeping', 'listening music']

// }
// for(let key in person){
    
//      console.log(`${key}: ${person[key]}`);
//     //  console.log(key,":",person[key]);
//      //  name: Preeti
//      // age: 22
//      // person hobbies: guitar,sleeping,listening music

// }

console.log(Object.keys(person)); // array return
//  ['name', 'age', 'person hobbies']
console.log(Array.isArray(Object.keys(person))) // true

for(let key of Object.keys(person)){
    console.log(key, ":", person[key]);
    //      //  name: Preeti
//      // age: 22
//      // person hobbies: guitar,sleeping,listening music
}