// functions
// like labaour

// console.log("happy birthday to you ......");

// console.log("happy birthday to you........")

function singHappyBirthday(){
    console.log("happy birthday to you........")
}

singHappyBirthday(); //calling
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();

function twoPlusFour(){
  return 2+4;
}
console.log(twoPlusFour()); // 6

//dry don't repeat yourself

const returnedValue = twoPlusFour();
console.log(returnedValue);  //6

function sumTwoNumbers(num1,num2){ // parameter
    return num1+num2 // 4+5
}
const returnValue = sumTwoNumbers(4,5); // argument
console.log('returnValue: ', returnValue);  // returnValue:  9

// console.log(undefined+undefined) // NaN


function sumThreeNumbers(num1,num2,num3){
    return num1+num2+num3; // 3+6+9
}
const returnThreeValue = sumThreeNumbers(3,6,9);
console.log('returnThreeValue: ', returnThreeValue);  // returnThreeValue:  18

console.log(1+2+undefined) // NaN

// od or even
// input 1 number
// output true if number is even : false

function IsEven(num){
    return num%2==0 ? true : false;  // ternary operator
}

console.log(IsEven(4)); // true

// input: string
// output: firstCharacter
function firstChar(str){
    return str[0];
}
console.log(firstChar("abc")) //a

// input : array, target: (num)
// find target in array
// output : index of target if target present in array else -1
function fun(arr,target){
   for(let i=0; i<arr.length; i++){
    if(arr[i]===target){
        return i;
    }
   }
   return -1;
}
console.log(fun([1,2,3,4,5],4)); // 3