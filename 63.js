// some method;
const numbers = [3,5,8,9];

// ek bhi number even hai
// true;
// const ans = numbers.some((number)=>number%2==0)
// console.log('ans: ', ans); // ans: true;

const userCart = [
    {productId: 1, productName: "mobile", price:10000},
    {productId: 2, productName: "tv", price:35000},
    {productId: 3, productName: "laptop", price:101000},
];

const ans = userCart.some((cartItem)=>cartItem.price>100000);
console.log('ans: ', ans); // ans:  true;