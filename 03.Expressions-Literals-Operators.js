// EXPRESSIONS, LITERALS, AND OPERATORS

/*
 * 1. Expressions: An expression is any valid unit of code that resolves to a value. It can be a combination of variables, literals, operators, and function calls. Examples include:
 *    - 5 + 3 (resolves to 8)
 *    - "Hello, " + "world!" (resolves to "Hello, world!")
 *    - Math.max(10, 20) (resolves to 20)
 * 
 * 2. Literals: A literal is a fixed value that is directly written in the code. Examples include:
 *    - Number literals: 42, 3.14
 *    - String literals: "Hello", 'World'
 *    - Boolean literals: true, false
 *    - Null literal: null
 *    - Undefined literal: undefined
 *    - Symbol literal: Symbol('description')
 * 
 * 3. Operators: Operators are special symbols that perform operations on operands (variables and values). Examples include:
 *    - Arithmetic operators: +, -, *, /, %
 *    - unary operators: ++, --, typeof, delete, void
 *    - Assignment operators: =, +=, -=, *=, /=
 *    - Comparison operators: ==, ===, !=, !==, >, <, >=, <=
 *    - Logical operators: &&, ||, !
 *    - Bitwise operators: &, |, ^, ~, <<, >>, >>>
 *    - Ternary operator: condition ? expressionIfTrue : expressionIfFalse
 * 
 * In JavaScript, we can combine expressions, literals, and operators to create more complex expressions. For example:
 * 
 * let a = 10;
 * let b = 5;
 * let sum = a + b; // sum is an expression that resolves to 15
 * let isGreater = a > b; // isGreater is an expression that resolves to true
 * let message = "The sum of " + a + " and " + b + " is " + sum; // message is an expression that resolves to "The sum of 10 and 5 is 15"
 * 
// -- EXPRESSIONS vs STATEMENTS --

/*
 * Expression: A piece of code that produces a value.
 * Example: 5 + 5, "Hello", true, getSum()
 */
let myExpression = 10 + 20; // 10 + 20 is the expression

/*
 * Statement: A piece of code that performs an action. It's like a complete sentence.
 * Example: let x = 10; (Variable declaration), if () { ... } (Control flow)
 */
if (true) { console.log("I am a statement"); }


// -- TEMPLATE LITERALS --

// Template literals allow us to embed expressions inside strings using backticks (``).

let myName = "Adnan";
let myAge = 22;

// Old way (Concatenation)
let oldWay = "Hello, my name is " + myName + " and I am " + myAge + " years old.";

// New way (Template Literals - Recommended!)
let newWay = `Hello, my name is ${myName} and I am ${myAge} years old.`;

console.log("Template Literal Output:", newWay);

// Why they are awesome:
// 1. Multiline strings are easy
let multiline = `This is line 1
This is line 2`;

// 2. We can perform math inside ${}
console.log(`The sum of 10 + 20 is: ${10 + 20}`); 
