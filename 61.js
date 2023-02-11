// find methods
// const myArray = ["Hello","cat","dog","Lion"];
// function isLength(string){
//     return string.length === 3;
// }
// const ans = isLength(myArray);
// console.log(ans); // false
// const ans = myArray.find(isLength);
// console.log('ans: ', ans); // ans:  cat

// const ans = myArray.find((string)=>string.length===3);
// console.log('ans: ', ans); // ans:  cat

const users = [
    {userId:1, userName:"Preeti"},
    {userId:2, userName:"Priyanka"},
    {userId:3, userName:"chandra"},
    {userId:4, userName:"gudiya"},
    {userId:5, userName:"Anushka"},
    {userId:6, userName:"Amit"},
    {userId:7, userName:"Savita"},

];

const myUser = users.find((user)=>user.userId===3);
console.log('myUser: ', myUser); // {userId: 3, userName: 'chandra'}

