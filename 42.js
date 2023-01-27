// objects inside array
// very useful in real world applications

const users = [
    {userId:1, firstName: 'preeti',gender:'female'},
    {userId:2, firstName: 'paarthav', gender: 'male'},
    {userId:3, firstName: 'paarth', gender: 'male'},
]

// console.log(users);

for(let user of users){
    console.log(user);
    //{userId: 1, firstName: 'preeti', gender: 'female'}firstName: "preeti"gender: "female"userId: 1[[Prototype]]: Object
    //{userId: 2, firstName: 'paarthav', gender: 'male'}
    //{userId: 3, firstName: 'paarth', gender: 'male'}
    console.log(user.firstName);
    // preeti
    // paarthav
    // paarth
}