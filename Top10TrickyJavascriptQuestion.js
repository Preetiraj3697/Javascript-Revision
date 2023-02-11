// 1) Mutability
// In Javascript, we have 7 primitive data types (string, number, bigint, boolean, undefined, symbol, and null). These all are immutable meaning that once a value is assigned, we cannot modify them, what we can do is reassign it to a different value (different memory pointer). The other data types such as Object and Function, on the other hand, is mutable meaning we can modify the value in the same memory pointer.

//Q1
let text = 'abcde'
text[1] = 'z'
console.log(text) //ans: abcde

// String is immutable, so once assigned to a value, you cannot change it to a different value. What you can do is reassign it. Remember that changing value and reassigning to another value is different

//Q2
const arr = [1,2,3]
arr.length = 0
console.log(arr) //ans: []

// Assigning arr.length as 0 is the same as resetting or clearing the array, so right now, the array will become an empty array

//Q3
const arr = [1,2,3,4]
arr[100] = undefined
console.log(arr, arr.length) //ans: [ 1, 2, 3, 4, <96 empty items>, undefined ] 

2) Var and Hoisting
//Q4
var variable = 10;
(() => {
	variable2 = 100;
	console.log(variable);
	console.log(variable2);
	variable = 20;
	var variable2 = 50;
	console.log(variable);
})();
console.log(variable);
var variable = 30
console.log(variable2);
//ans:
//10
//100
//20
//20
//ReferenceError: variable2 is not defined
// var is a functional scope variable, while let and const are block-scoped variables. Only var can be hoisted, meaning that variable declaration is always moved to the top. Because of the hoisting, you can assign, call, or use the variable before you even declare it with var keyword. However, let and const cannot be hoisted because it enables the TDZ (Temporal Dead Zone), meaning the variable is unreachable before it is declared.

// In the example above, variable2 is declared inside a function with var keyword that makes that variable is only available within the function scopes only. So when anything outside the function wants to use or call that variable, referenceError is thrown

//Q5
test() //not error
function test(){
	console.log('test')
}

test2() //error
var test2 = () => console.log('test2')
// Function declaration with function keyword can be hoisted. However, an arrow function cannot be hoisted, even if it is declared with var variable.

3) Accidental Global Variable
//Q6
function foo() {
  let a = b = 0;
  a++;
  return a;
}
foo();
typeof b; // => number
typeof a; // => undefined

console.log(a) //error: ReferenceError: a is not defined
// var is a functional scoped variable and let is a block-scoped variable. Although it seems that a and bare declared using let in let a = b = 0, the reality is variable b is declared as a global variable and assigned to a window object. In another word, it is similar as

function foo() {
  window.b = 0
  let a = b;
  a++;
  return a;
}
4) Closure
//Q7
const length = 4;
const fns = [];
const fns2 = [];
for (var i = 0; i < length; i++) {
	fns.push(() => console.log(i));
}
for (let i = 0; i < length; i++) {
	fns2.push(() => console.log(i));
}
fns.forEach(fn => fn()); // => 4 4 4 4
fns2.forEach(fn => fn()); // => 0 1 2 3
// Closure is a preservation of a variable environment even though the variable is already changed or garbage collected. In the above question, the difference here is in the variable declaration, where the first loop is using var and the second loop is using let. var is a functional scoped variable, so when it’s declared inside a for loop block, the var is considered a global variable instead of an internal block variable. On the other hand, let is a block-scoped variable, similar to the variable declaration in other languages such as Java and C++.

// In this case, closure is only happening in let variable. Each of the functions pushed to the fns2 array remembers the current value of the variable, no matter if the variable is changed in the future. Oppositely, the fns do not remember the current value of the variable, it uses the future or final value of the global variable

5) Object
//Q8
var obj1 = {n: 1}
var obj2 = obj1
obj2.n = 2
console.log(obj1) //ans: {n: 2}

//Q9
function foo(obj){
 obj.n = 3
 obj.name = "test"
}
foo(obj2)
console.log(obj1) //ans: {n: 3, name: "test"}
// As we know, the object variable only contains the pointer of memory location of that object. So here obj2 and obj1 point to the same object. This means that if we change any value in obj2, obj1 will also be affected because essentially it’s the same object. Similarly, when we assign an object as a parameter in a function, the argument passed only contains the object pointer. So, the function can modify the object directly without returning anything. This technique is called passed by reference

//Q10
var foo = {n: 1};
var bar = foo;
console.log(foo === bar) //true
foo.x = foo = {n: 2};

console.log(foo) //ans: {n: 2}
console.log(bar) //ans: {n: 1, x: {n: 2}}
console.log(foo === bar) //false
// Because the object variable only contains the pointer of memory location of that object, when we declare var bar = foo, both foo and bar point to the same object.

// In the next logic, foo = {n:2} is running first where foo is assigned to a different object. Hence, foo has a pointer to a different object. At the same time, foo.x = foo is running, foo here still contains the old pointer. so the logic is similar with

foo = {n: 2}
bar.x = foo
// so bar.x = {n: 2}. Finally the value of foo is {n: 2} , while bar is {n:1, x: {n: 2 }}

6) This
//Q11
const obj = {
  name: "test",
  prop: {
      name: "prop name",
      print: function(){console.log(this.name)},
  },
  print: function(){ console.log(this.name) }
  print2: () => console.log(this.name, this)
}

obj.print() //ans: test
obj.prop.print() //ans: prop name
obj.print2() //ans: undefined, window global object
// The above example shows how this keyword works in an object. this refers to an object execution context in a function execution. However, this scope is only available in a regular function declaration and not in the arrow function. The above example shows the explicit binding where for example, object1.object2.object3.object4.print(), the print function will use the latest object which is object4 as the this context. If this object is not bound, it will fall back to the root object which is the window global object which is happening when we call obj.print2()

// On the other hand, you must also understand the implicit binding where the object context is already bound before, so the next function execution always uses that object as the this context. For example, when we use func.bind(<object>) , it will return a new function that use <object> as the new execution context.

7) Coercion
//Q12
console.log(1 +  "2" + "2"); //ans: 122
console.log(1 +  +"2" + "2"); //ans: 32
console.log(1 +  -"1" + "2"); //ans: 02
console.log(+"1" +  "1" + "2"); //ans: 112
console.log( "A" - "B" + "2"); //ans: NaN2
console.log( "A" - "B" + 2); //ans: NaN
“10,11” == [[[[10]],11]] //10,11 == 10,11, and: true
"[object Object]" == {name: "test"} //ans true
// Coercion is one of the trickiest JS questions. In general, there are 2 rules. The first rule is if 2 operands are connected with + operand, both operands will be changed to a string first with toString method and then concatenated. Meanwhile, the other operator such as - , *, or / will change the operand to a number. If it cannot be coerced to a number, NaN will be returned.

// It will be trickier if the operand includes an object or array. Any object has toString method that returned [object Object]. But in an array, the toString method will return the underlying value that is separated by a comma.

// Noted that: == means that coercion is allowed to happen, while === is not.

8) async
//Q13
console.log(1); 
new Promise(resolve => {
  console.log(2); 
  return setTimeout(() => {
    console.log(3)
    resolve()
  }, 0)
})
setTimeout(function(){console.log(4)}, 1000); 
setTimeout(function(){console.log(5)}, 0); 
console.log(6);
//ans: 1 2 6 3 5 4
//  Here, you need to know how event loop, macrotask and microtask queue work. You can check out my previous article here where I deep dive into those concepts. In general, the asynchronous function will execute later after all the synchronous function is finished executing.

//Q14
async function foo() {return 10}
console.log(foo()) //ans: Promise { 10 }
// Once the function is declared with async. it always returns a Promise, no matter if the internal logic is synchronous or asynchronous.

//Q15
const delay = async (item) => new Promise(
	resolve => setTimeout(() => {
		console.log(item);
		resolve(item)
	}, Math.random() * 100)
)
console.log(1)
let arr = [3,4,5,6]
arr.forEach(async (item) => await delay(item))
console.log(2)
// forEach function is always synchronous, no matter if each loop is synchronous or asynchronous. This means that each loop will not wait for the other. If you want to execute each loop in sequence and wait for each other, use for of instead.

9) Function
//Q16
if(function f(){}){ console.log(f) }
//error: ReferenceError: f is not defined
// In the above example, the if condition is satisfied because function declaration is considered a true value. But, the internal block cannot access the function declaration because they have a different block scope.

//Q17
function foo(){
	return
	{ name: 2 }
}
foo() //return undefined
// because of the automatic semicolon insertion (ASI), the return statement will be ended with the semicolon and everything below it will not be run or considered.

//Q18
function foo(a,b,a){return a+b}
console.log(foo(1,2,3)) //ans: 3+2 = 5

function foo2(a,b,c = a){return a+b+c}
console.log(foo2(1,2)) //ans = 1+2+1 = 4

function foo3(a = b, b){return a+b}
console.log(foo3(1,2)) //ans = 1+2 = 3
console.log(foo3(undefined,2)) //error
// The first 3 executions are quite clear, but the last function execution throws an error because b is used before it’s declared, similar to this

let a = b
let b = 2
10) Prototype
//Q19
function Person() { }
Person.prototype.walk = function() {
  return this;
}
Person.run = function() {
  return this;
}
let user = new Person();
let walk = user.walk;
console.log(walk()); //window object
console.log(user.walk()); //user object
let run = Person.run;
console.log(run()); //window object
console.log(user.run()); //TypeError: user.run is not a function
// Prototype is an object that exists in every variable that is used to inherit features from its parent. For example, when you declare a string variable, that string variable has a prototype that inherits from String.prototype. That’s why you can call a string method inside the string variable such as string.replace(), string.substring(), etc

// In the above example, we assign walk function to the Person function prototype and assign run function to the function object. It’s 2 different Objects. Every object that is created by the function using the new keyword will inherit the method from the function prototype and not the function object. But remember if we assign that function to a variable like this let walk = user.walk, the function will forget the user as this execution context and will fall back to the window object instead.
