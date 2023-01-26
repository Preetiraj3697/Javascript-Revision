// break keyword

// continue keyword

for(let i=1; i<=10; i++){
    if(i==4){
        break;
    }
    console.log(i); // 1 // 2 // 3
}
console.log("hello there");
// 1
// 2
// 3
// hello there
for(let i=1; i<=10; i++){
    if(i==4){
        continue;
    }
    console.log(i);
}
console.log("hello there");
// 1
// 2
// 3
// 5
// 6
// 7
// 8
// 9
//10
// hello there
// 4 skip