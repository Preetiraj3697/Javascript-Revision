// sort method
// ASCII TABLE
// char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58 

// sort

// const numbers = [5,100,9,400,3000,900] // string samjh raha hai javascript like ["5","100","9","400","3000","900"];
// // ["5","100","9","400","3000","900"];
// // ascii value [53,49,57,52,51,57]
// // [49,51,52,53,57,57]
// // [100,3000,400,5,9,900]
// numbers.sort()
// console.log(numbers);  //  [100, 3000, 400, 5, 9, 900]


// const userName = ['harshit','abcd','mohit','nitish','preeti'];
// userName.sort();
// console.log(userName);  // ['abcd', 'harshit', 'mohit', 'nitish','preeti']

const numbers = [5,9,1200,1500,500,140];
// numbers.sort();
// console.log(numbers);   // [1200, 140, 1500, 5, 500, 9]

numbers.sort((a,b)=>{
    return a-b;
})
console.log(numbers); // [5, 9, 140, 500, 1200, 1500]

// 1200,410
// a-b ---> positive(greater than 0);
// 410, 1200
// a-b ---> negative;
// 5,9, ---> -4;
numbers.sort((a,b)=>{
    return b-a;
})
console.log(numbers);  // [1500, 1200, 500, 140, 9, 5]
// price lowToHigh HighToLow
const products = [
    {productID:1,productName:"Pl",price:300},
    {productID:2,productName:"P2",price:3000},
    {productID:3,productName:"P3",price:309},
    {productID:4,productName:"P4",price:500},
    {productID:5,productName:"P5",price:100},
]
// lowToHigh;
products.sort((a,b)=>{
    return a.price-b.price;
})
console.log(products);
//0
// : 
// {productID: 5, productName: 'P5', price: 100}
// 1
// : 
// {productID: 1, productName: 'Pl', price: 300}
// 2
// : 
// {productID: 3, productName: 'P3', price: 309}
// 3
// : 
// {productID: 4, productName: 'P4', price: 500}
// 4
// : 
// {productID: 2, productName: 'P2', price: 3000}
// length
// : 
// 5
// [[Prototype]]
// : 
// Array(0)

// HighToLow
products.sort((a,b)=>{
    return b.price-a.price;
})
console.log(products);
// 0
// : 
// {productID: 2, productName: 'P2', price: 3000}
// 1
// : 
// {productID: 4, productName: 'P4', price: 500}
// 2
// : 
// {productID: 3, productName: 'P3', price: 309}
// 3
// : 
// {productID: 1, productName: 'Pl', price: 300}
// 4
// : 
// {productID: 5, productName: 'P5', price: 100}

