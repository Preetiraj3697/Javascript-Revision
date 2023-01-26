// difference between dot and bracket notation
const key = 'email';
const person = {
    name:'Preeti',
    age: 22,
    "person hobbies": ['guitar','sleeping','listening music']
}
// console.log(person.person hobbies); // after argument list
// console.log(person['person hobbies']) // ['guitar', 'sleeping', 'listening music']

// person.key = 'preetiraj@gmail.com';
// console.log(person);
//{name: 'Preeti', age: 22, person hobbies: Array(3), key: 'preetiraj@gmail.com'}
person[key] = 'preetiraj@gmail.com';
console.log(person);

// {name: 'Preeti', age: 22, person hobbies: Array(3), email: 'preetiraj@gmail.com'}