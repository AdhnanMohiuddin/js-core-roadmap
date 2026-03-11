
/* This js file i have created as a quick revision for basics and core concepts of js */


/** before diving into variables, for our understading we have two types of typed programming languages
 * 1. statically typed languages: In statically typed languages, the type of a variable is determined at compile time and cannot be changed. Examples include Java, C++, and TypeScript.
 * example: int age = 25; // age is of type int and cannot be changed to another type.
 *          String name = "Alice"; // name is of type String and cannot be changed to another type.
 * 
 * 
 * 2. dynamically typed languages: In dynamically typed languages, the type of a variable is determined at runtime and can be changed. JavaScript is a dynamically typed language.
 * 
 * example: let age = 25; // age is of type number
 *          age = "twenty five"; // age is now of type string
 * 
 * In JavaScript, we can declare variables using var, let, and const. Each of these has its own characteristics and use cases.
 * 
 * so, javascript is a dynamically typed language, which means that we can assign different types of values to the same variable without any issues.
*/


/**
 *  variables in js 
 * 
 * variables are used to store data in js. we can use var, let and const to declare variables in js.
 * 
 * variables can store different types of data such as numbers, strings, booleans, arrays, objects, etc.
 * variables can be declared and initialized in the same line or in separate lines.
 * 
 * variables must begin with a letter, underscore (_) or dollar sign ($). they cannot begin with a number.
 * 
 * we have three types of variables in js
 * 1. var (old way of declaring variables, not recommended to use)
 * 2. let (new way of declaring variables, recommended to use)
 * 3. const (new way of declaring variables, recommended to use for constants {e.g. pi, gravity, etc.})
 * 
 * var is function scoped and can be re-declared and updated
 * let is block scoped and can be updated but not re-declared
 * const is block scoped and cannot be updated or re-declared
 * 
 * example:
 * 
 */

var VarVariable = "I am a var variable";
let LetVariable = "I am a let variable";
const ConstVariable = "I am a const variable";

console.log(VarVariable);
console.log(LetVariable);
console.log(ConstVariable);

var VarVariable = "I am a re-declared var variable";
console.log(VarVariable);

// let LetVariable = "I am a re-declared let variable"; // This will throw an error
// but i can be re-assigned
LetVariable = "I am an updated let variable";
console.log(LetVariable);

// const ConstVariable = "I am a re-declared const variable"; // This will throw an error
// ConstVariable = "I am an updated const variable"; // This will also throw an error
console.log(ConstVariable);


// -- HOISTING & TDZ --

// 1. HOISTING
// Hoisting is JavaScript's default behavior of moving declarations to the top.

console.log(hoistedVar); // Output: undefined (var is hoisted but not initialized)
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted in a way you can use me";


// 2. TEMPORAL DEAD ZONE (TDZ)
// The TDZ is the period between the start of the block and the variable declaration.
// Accessing a 'let' or 'const' variable in the TDZ throws a ReferenceError.

{
   // -- Starting of TDZ --
   // console.log(name); // Error!
   let name = "Adnan"; // -- End of TDZ --
   console.log(name); // Output: Adnan
}


// -- CONVENTIONS & CONSOLING --

// 1. NAMING CONVENTIONS
// In JS, we follow specific rules to keep code clean:

// - camelCase (Standard): First word lowercase, subsequent words capitalized.
let myFirstName = "Adnan";

// - Descriptive names: Avoid 'x' or 'y'. Use meaningful names.
let userAge = 25; // Good
let a = 25; // Bad (unclear)

// - Case Sensitivity: 'name' and 'Name' are different variables.
let hobby = "Coding";
let Hobby = "Gaming";


// 2. DOING MORE WITH console.log()
// Beyond simple logging, we have better tools for debugging:

let user = { id: 1, name: "Adnan", role: "Developer" };

// A. console.table() - Great for Objects and Arrays
console.table(user);

// B. console.warn() - For warnings
console.warn("This is a warning!");

// C. console.error() - For errors
console.error("This is an error!");

// D. console.time() & console.timeEnd() - To check performance (how fast code runs)
console.time("Timer1");
// some code...
console.timeEnd("Timer1");


