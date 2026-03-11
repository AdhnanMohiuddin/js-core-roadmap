/**
 * DATATYPES IN JAVASCRIPT
 * 
 * In JavaScript, there are several data types that can be categorized into two main groups: primitive and non-primitive (or reference) types.
 * 
 * 1. Primitive Data Types:
 *   - String: Represents a sequence of characters. Example: "Hello, World!"
 *  - Number: Represents both integer and floating-point numbers. Example: 42, 3.14
 *  - Boolean: Represents a logical entity that can have two values: true or false. Example: true, false
 *  - Null: Represents the intentional absence of any object value. Example: null
 *  - Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
 *  - Symbol: Represents a unique and immutable identifier. Example: Symbol('description')
 * 
 * 2. Non-Primitive (Reference) Data Types:
 *   - Object: Represents a collection of properties and methods. Example: { name: "Alice", age: 30 } 
 *      it is basically a key-value pair where the key is a string and the value can be of any data type (including another object).
 *   
 *  - Array: Represents an ordered list of values. Example: [1, 2, 3, "four"]
 *  
 *  - Function: Represents a reusable block of code that performs a specific task. Example: function greet() { console.log("Hello!"); }
 * 
 */

// Example of primitive data types

//Number
let age = 25;
console.log(age); // Output: 25
//String
let name = "Alice";
console.log(name); // Output: Alice
//Boolean
let isStudent = true;
console.log(isStudent);
//Null
let emptyValue = null;
console.log(emptyValue);
//Undefined
let uninitializedVariable;
console.log(uninitializedVariable);
//Symbol
let uniqueId = Symbol('id');
console.log(uniqueId);

//BigInt (For very large numbers)
let largeNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", largeNumber);

//NaN (Not a Number)
let result = "Hello" / 2;
console.log("NaN Result:", result); // Output: NaN
console.log("Type of NaN:", typeof NaN); // Output: number (A famous JS trick!)



// to check the type of a variable, we can use the typeof operator Example:

console.log(typeof age); // Output: number
console.log(typeof name); // Output: string
console.log(typeof isStudent); // Output: boolean
console.log(typeof emptyValue); // Output: object (this is a known quirk in JavaScript)
console.log(typeof uninitializedVariable); // Output: undefined
console.log(typeof uniqueId); // Output: symbol


// Example of non-primitive (reference) data types

// Object
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person); // Output: { name: "Alice", age: 30 }
//we can access the properties of an object using dot notation or bracket notation
console.log(person.name); // Output: Alice
/*or*/
console.log(person["age"]); // Output: 30
console.log(person.city); // Output: New York
console.log(typeof person); // Output: object

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(typeof numbers); // Output: object (arrays are a type of object in JavaScript)

/* there are many built-in methods for arrays in JavaScript, such as push(), pop(), shift(), unshift(), slice(), splice(), etc. 
    these we will cover in detail in the arrays section of this course.
    we can also iterate over arrays using loops, such as for loop, for...of loop, forEach() method, map() method, etc.
    we will cover these in detail in the loops and arrays section of this course.
*/


// Function

// this is the syntax for declaring a function in JavaScript we will cover functions in detail in the functions section of this course.
function greet() {
    console.log("Hello!");
}

// we can also declare functions using function expressions and arrow functions we will cover these in detail in the functions section of this course.

let greetExpression = function () {
    console.log("Hello from function expression!");
};

let greetArrow = () => {
    console.log("Hello from arrow function!");
}

// we can call the functions using their names followed by parentheses
greet();
greetExpression();
greetArrow();

// we can also pass parameters to functions and return values from functions we will cover these in detail in the functions section of this course.

// for now just to give you a brief idea about parameters and return values in functions, here is an example:

function add(a, b) {
    return a + b;
}

let sum = add(5, 10);
console.log(sum); // Output: 15


// -- TYPE CONVERSION & COERCION --

// 1. EXPLICIT CONVERSION (Manual)
// When we manually change the type of a value.

//we have built-in functions for type conversion in JavaScript
//this includes:

// String(), toString() for converting to string
// to use toString() we use dot operator
// that us num.toString(). for all the others we are the variable within tha parameters
//Number(), parseInt(), parseFloat() for converting to number
// Boolean(), for converting to boolean

let score = "100";
let scoreNum = Number(score); // Converts string to number
console.log("Explicit Conversion:", typeof scoreNum); // Output: number


let ageValue = 25;
let ageStr = String(ageValue); // Converts number to string
console.log("Explicit Conversion:", typeof ageStr); // Output: string


// 2. IMPLICIT COERCION (Automatic)
// When JS automatically changes the type based on the operation.

console.log("5" + 2); // Output: "52" (Number 2 is coerced into a string)
console.log("5" - 2); // Output: 3 (String "5" is coerced into a number)
console.log("5" * "2"); // Output: 10 (Both coerced into numbers)


// 3. TRUTHY & FALSY VALUES
// In JS, values are either "truthy" or "falsy" when used in a boolean context (like an 'if' statement).

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is Truthy.

console.log("Is 'Hello' truthy?", Boolean("Hello")); // Output: true
console.log("Is 0 truthy?", Boolean(0)); // Output: false
