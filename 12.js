// boolean s & comparison operator
//booleans
//true, false
let nums1 = 9;
let nums2 = 7;

console.log(nums1>=nums2);//true
//>= less than equal to
// == equal to 
// <= greater than and equal to
//> less than
//< greater than


// == vs === 
let num1 = "7";
let num2 = 7;
console.log(num1==num2) //true
// The == operator is an equality operator.Double equals (==) is a comparison operator, which transforms the operands having the same type before comparison.
//So, when you compare string with a number, JavaScript converts any string to a number. An empty string is always converts to zero. A string with no numeric value is converts to NaN (Not a Number), which returns false.
console.log(num1===num2) //false
//=== (Triple equals) is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality. If we compare 2 with “2” using ===, then it will return a false value.

//= JavaScript operator assigns a value to the left operand depends on the value of operand available on the right side. The first operand should be a variable.
// The basic assignment operator is =, that assigns the value of one operand to another. That is, a = b assigns the value of b to a.

// Why use == in JavaScript?
// Here are the important uses of == in JavaScript:

// The == operator is an equality operator. It checks whether its two operands are the same or not by changing expression from one data type to others. You can use == operator in order to compare the identity of two operands even though, they are not of a similar type.

// How === Works Exactly?
// Strict equality === checks that two values are the same or not.
// Value are not implicitly converted to some other value before comparison.
// If the variable values are of different types, then the values are considered as unequal.
// If the variable are of the same type, are not numeric, and have the same value, they are considered as equal.
// Lastly, If both variable values are numbers, they are considered equal if both are not NaN (Not a Number) and are the same value.



// != vs !==
//!=
// check only value
console.log(num1!=num2); //false
//!==
//check value and data type both
console.log(num1!==num2) //true





