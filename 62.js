// every method

const numbers = [2,4,6,12,8,10];

const res = numbers.every((number)=>number%2===0);
console.log('res: ', res); //res:  true

// callback function ===> true/ false (boolean);
// every function method ===> true / false (boolean);

// reality example;

// const userCart = [
//     {productId: 1, productName: "mobile", price:10000},
//     {productId: 2, productName: "tv", price:15000},
//     {productId: 3, productName: "laptop", price:21000},
// ];

// const ans = userCart.every((cartItem)=>cartItem.price<30000);
// console.log('ans: ', ans); // ans:  true

const userCart = [
    {productId: 1, productName: "mobile", price:10000},
    {productId: 2, productName: "tv", price:35000},
    {productId: 3, productName: "laptop", price:21000},
];

const ans = userCart.every((cartItem)=>cartItem.price<30000);
console.log('ans: ', ans); // ans:  false