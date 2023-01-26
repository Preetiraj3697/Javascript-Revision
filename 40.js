// spread operator

const array1 = [1,2,3];
const array2 = [4,5,6];
// const newArray = [...array1,...array2,89,69];
// console.log(newArray); // [1, 2, 3, 4, 5, 6,89,69]
// const newArray = [..."123456789"]
// console.log(newArray); //['1', '2', '3', '4', '5', '6', '7', '8', '9']

// const newArray = [...123456789]
// console.log(newArray) // error : 123456789 is not iterable

// spread operator in objects
// const obj1 = {
//     key1: 'value1',
//     key2: 'value2',
//     key1: 'value59'
// }
// console.log(obj1); // {key1: 'value59', key2: 'value2'}
const obj1 = {
    key1: 'value1',
    key2: 'value2',
}

const obj2 = {
    key4: 'value4',
    key5: 'value5',
    key1: 'value59'
}
// console.log(obj1,obj2);
//{key1: 'value1', key2: 'value2'} {key4: 'value4', key5: 'value5', key1: 'value59'}

// const newObj = {...obj1,...obj2};
// console.log(newObj); // {key1: 'value59', key2: 'value2', key4: 'value4', key5: 'value5'}

// const newObj = {...obj2,...obj1};
// console.log(newObj); // {key4: 'value4', key5: 'value5', key1: 'value1', key2: 'value2'}

// const newObj = {...obj2,...obj1,key69:'value69'};
// console.log(newObj);
//{key4: 'value4', key5: 'value5', key1: 'value1', key2: 'value2', key69: 'value69'}key1: "value1"key2: "value2"key4: "value4"key5: "value5"key69: "value69"[[Prototype]]: Object

// const newObj = {..."abc"};
// console.log(newObj); //{0: 'a', 1: 'b', 2: 'c'}


const newObj = {...['item1','item2','item3']};
console.log(newObj); // {0: 'item1', 1: 'item2', 2: 'item3'}
