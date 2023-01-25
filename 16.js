// and or operator

let firstName = "Preeti";
let age = 12;
// if(firstName[0]==="P"){
//     console.log("your name starts with P")
// }
// if(age>18){
//     console.log("you are above 18");
// }

// && operator
if(firstName[0]==="P" && age>18){
    console.log("Name starts with P and age above 18")
}else{
    console.log("inside else")
}
// output inside else
// when both two condition true print if part.
// when one conditon fail and one condition pass print else part.
// || operator
if(firstName[0]==="P" || age>18){
    console.log("Name starts with P and age above 18")
}else{
    console.log("inside else")
}
// output Name starts with P and age above 18
// when both two condition false print else part.
// when one conditon fail and one condition pass print if part.