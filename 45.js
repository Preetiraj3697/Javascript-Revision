// function expression
// function singHappyBirthday(){
//     console.log("happy birthday to you........")
// }

// singHappyBirthday();
const singHappyBirthday = function(){
    console.log('happy birthday to you.....');
}
singHappyBirthday();

const  twoPlusFour = function(){
    return 2+4;
}
console.log(twoPlusFour());


const fun = function(arr,target){
    for(let i=0; i<arr.length; i++){
     if(arr[i]===target){
         return i;
     }
    }
    return -1;
 }
 console.log(fun([1,2,3,4,5],3));