// default parameters
// before es6
// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=1;
//     }
//     if(typeof a === "undefined"){
//         a=1;
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans);

// after es6
function addTwo(a=1,b=1){
    return a+b;
}
const ans = addTwo(4);
console.log(ans);