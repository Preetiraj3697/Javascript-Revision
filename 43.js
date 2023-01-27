// nested destructuring
const users = [
    {userId:1, firstName: 'preeti',gender:'female'},
    {userId:2, firstName: 'paarthav', gender: 'male'},
    {userId:3, firstName: 'paarth', gender: 'male'},
]

// const [user1,user2,user3] = users;
// console.log(user1); // {userId: 1, firstName: 'preeti', gender: 'female'}

// firstName: preeti gender: male

// const [{firstName}, ,{gender}] = users;
// console.log('gender: ', gender);  // gender:  male
// console.log('firstName: ', firstName);  // firstName:  preeti


// const [{firstName:user1FristName}, ,{gender:user3gender}] = users;
// console.log('gender: ', user3gender);  // gender:  male
// console.log('firstName: ', user1FristName); // firstName : preeti

const [{firstName:user1FristName,userId}, ,{gender:user3gender}] = users;
console.log('userId: ', userId); // userId: 1
console.log('gender: ', user3gender);  // gender:  male
console.log('firstName: ', user1FristName); // firstName: preeti
