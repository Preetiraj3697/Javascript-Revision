// for loop in array

let fruits = ['apple','mango','grapes','banana'];
let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);  
    //apple
    //mango
    //grapes
    //banana
    fruits2.push(fruits[i].toUpperCase());  
}
console.log(fruits2); //['APPLE', 'MANGO', 'GRAPES', 'BANANA']
