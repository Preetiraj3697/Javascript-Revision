//rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log("c is" , c);
// }

// myFunc(3,4,5,6,7,8,9)


function addAll(...numbers){
    console.log(numbers);
    // console.log(Array.isArray(numbers))
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
    
}
const ans = addAll(1,2,3,4,5,6,7,8,9);
console.log('ans: ', ans);
