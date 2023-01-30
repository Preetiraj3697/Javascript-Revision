// reduce

const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in array
// 

const sum = numbers.reduce((accumulator,currentValue)=>{
    
    return accumulator+currentValue
},100)

console.log('sum: ', sum); //15

// accumulator, currentValue , return
// 100        ,  1           , 101
// 101          ,  2           , 103
// 103          ,  3           , 106
// 106          ,  4           , 110
// 110         ,  5           , 115
// than return 15

const userCart = [
    {productId:1, productName:"mobile",price:12000},
    {productId:2, productName:"laptop",price:22000},
    {productId:3, productName:"TV",price:15000},
    
]

const priceTotal = userCart.reduce((totalPrice,currentProduct)=>{  
    return totalPrice + currentProduct.price;
},0)

console.log('priceTotal: ', priceTotal);

// totalPrice  currentPrice   return
// 0            12000          12000
// 12000        22000          34000
// 34000        15000          49000
// return 49000