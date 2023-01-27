// arrow function
// const singHappyBirthday = function(){
//     console.log('happy birthday to you.....');
// }
// singHappyBirthday();
const singHappyBirthday = () =>{
    console.log('happy birthday to you.....');
}
singHappyBirthday();

const  twoPlusFour = () => {
    return 2+4;
}
console.log(twoPlusFour());


const fun = (arr,target) =>{
    for(let i=0; i<arr.length; i++){
     if(arr[i]===target){
         return i;
     }
    }
    return -1;
 }
 console.log(fun([1,2,3,4,5],3));
 
 const PrintIndex = (str,k) => {
    
    for(let i=0; i<str.length; i++){
        if(str[i]===k){
            return i;
        }
    }
    return -1;
 }

 console.log('PrintIndex: ', PrintIndex("Preeti","e"));