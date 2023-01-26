//while loop examples
let num = 100;
// 1+2+3+4+5+6+7+8+9+10
// o(n) time complexity
let total = 0;
let i = 0;
while(i<=num){
    total+=i;
    i++;
}
console.log(total);

// Fast o(1) time complexity
let tol = (num*(num+1)/2);
console.log(tol)