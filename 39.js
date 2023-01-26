// computed properties

const key1 = 'objkey1';
const key2 = 'objkey2';
const value1 = 'myvalue1';
const value2 = 'myvalue2';
// how to create obj like this using upper variable
// const obj = {
//     objkey1 : 'myvalue1',
//     objkey2 : 'myvalue2',
// }
// const obj = {
//     key1 : value1,
//     key2 : value2
// }
// console.log(obj); // {key1: 'myvalue1', key2: 'myvalue2'}

// computed properties
// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj); //{objkey1: 'myvalue1', objkey2: 'myvalue2'}

const obj = {}
    obj[key1] = value1;
    obj[key2] = value2;

console.log(obj); //{objkey1: 'myvalue1', objkey2: 'myvalue2'}