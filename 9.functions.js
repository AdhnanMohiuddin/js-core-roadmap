/**
 * MODULE 9: FUNCTIONS & SCOPE
 * 
 * Functions are one of the most fundamental building blocks in JavaScript.
 * A function is a reusable block of code designed to perform a particular task.
 * 
 * Why use functions?
 * 1. Reusability: Write code once, use it many times.
 * 2. Organization: Break down complex problems into smaller, manageable pieces.
 * 3. Dry Principle: "Don't Repeat Yourself".
 */

// ---------------------------------------------------------
// 1. FUNCTION DECLARATION
// ---------------------------------------------------------
/*
Syntax:
function functionName() {
    // code to execute
}
*/

// Example: Simulating a simple greeting
function sayHello() {
    console.log("1. Basic Function: Hello, welcome to JavaScript!");
}

// To use a function, you must "call" or "invoke" it:
sayHello();
// Output: 1. Basic Function: Hello, welcome to JavaScript!


// ---------------------------------------------------------
// 2. PARAMETERS AND ARGUMENTS (The Inputs)
// ---------------------------------------------------------
/*
Parameters: Variables listed in the function definition (like placeholders).
Arguments: The actual values passed to the function when it is called.
*/

function greetUser(firstName) { // 'firstName' is a parameter
    console.log(`2. Parameters: Hello, ${firstName}!`);
}

greetUser("Adnan"); // "Adnan" is an argument
greetUser("Saif");  // "Saif" is an argument
// Output: Hello, Adnan! | Hello, Saif!


// 2.1 Multiple Parameters
function addNumbers(a, b) {
    console.log(`2.1 Addition: ${a} + ${b} = ${a + b}`);
}
addNumbers(5, 10); // Output: 2.1 Addition: 5 + 10 = 15


// 2.2 Default Parameters (ES6)
// If an argument is missing, the default value kicks in.
function welcome(user = "Guest") {
    console.log(`2.2 Default: Welcome, ${user}`);
}

welcome();       // Output: 2.2 Default: Welcome, Guest
welcome("Saif"); // Output: 2.2 Default: Welcome, Saif


// 2.3 Rest Parameters (...)
// Used to handle an infinite number of arguments as an array.
function sumEverything(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log("2.3 Rest Parameters (Sum):", sumEverything(1, 2, 3, 4, 5));
// Output: 2.3 Rest Parameters (Sum): 15


// ---------------------------------------------------------
// 3. THE RETURN STATEMENT (The Output)
// ---------------------------------------------------------
/*
The 'return' statement stops the function and sends a value back to where it was called.
If no return is specified, the function returns 'undefined' by default.
*/

function calculatePercentage(total, obtained) {
    return (obtained / total) * 100;
}

const myResult = calculatePercentage(500, 450);
console.log("3. Return Value:", myResult + "%");
// Output: 3. Return Value: 90%


// 3.1 Returning Multiple Values (Using Objects/Arrays)
function getMinMax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    return { min, max }; // Returning an object
}

const result = getMinMax([10, 5, 100, 2]);
console.log("3.1 Multiple returns (Object):", result);
// Output: { min: 2, max: 100 }

// Destructuring the result:
const { min, max } = getMinMax([10, 5, 100, 2]);
console.log("3.1 Destructured values:", min, max); // 2, 100


// 3.2 THE "TOOLSET" PATTERN: Returning an Object of Functions
/*
A function can return an object that contains OTHER functions. 
This is how we create "toolkits" or "modules" in JavaScript.
*/

function createMathTool() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
    };
}

const myToolkit = createMathTool();
console.log("3.2 Toolset (Add):", myToolkit.add(10, 5)); // 15
console.log("3.2 Toolset (Sub):", myToolkit.subtract(10, 5)); // 5


// ---------------------------------------------------------
// 4. FUNCTION EXPRESSIONS
// ---------------------------------------------------------
/*
In JS, functions are "First-Class Citizens", meaning they can be stored in variables.
These are called Function Expressions.
*/

const goodbye = function () {
    console.log("4. Expression: Goodbye, see you soon!");
};

goodbye();

/* 
⚠️ HOISTING NOTE: 
Function Declarations are hoisted (you can call them before defining them).
Function Expressions are NOT hoisted (you must define them before calling them).
*/


// ---------------------------------------------------------
// 5. ARROW FUNCTIONS (Modern ES6)
// ---------------------------------------------------------
/*
A more concise way to write function expressions.
Syntax: (parameters) => { code }
*/

// Example: Square a number
const square = (n) => {
    return n * n;
};

// 5.1 Arrow Shorthand (Implicit Return)
// If the function has only one expression, you can remove {} and the 'return' keyword.
const cube = (n) => n * n * n;

console.log("5. Arrow Function:", square(4)); // 16
console.log("5.1 Arrow Shorthand:", cube(3)); // 27


// ---------------------------------------------------------
// 6. FUNCTIONS AS METHODS (Functions inside Objects)
// ---------------------------------------------------------
/*
When a function is a property of an object, it's called a Method.
*/

const calculator = {
    brand: "Casio",
    add: function (a, b) {
        return a + b;
    },
    // Modern Method syntax:
    multiply(a, b) {
        return a * b;
    },
    showBrand() {
        // 'this' refers to the current object (calculator)
        console.log("6. Method (this keyword):", this.brand);
    }
};

console.log("6. Method call:", calculator.multiply(5, 5)); // 25
calculator.showBrand(); // Output: 6. Method (this keyword): Casio


// ---------------------------------------------------------
// 7. ANONYMOUS FUNCTIONS
// ---------------------------------------------------------
/*
An anonymous function is a function without a name. 
You see them most often used as 'callbacks' (passed into other functions).
*/

// They are often used in things like timers:
setTimeout(function () {
    console.log("7. Anonymous: This ran after 2 seconds!");
}, 2000);


// ---------------------------------------------------------
// 8. IIFE (Immediately Invoked Function Expression)
// ---------------------------------------------------------
/*
An IIFE is a function that runs automatically as soon as it is created.
Syntax: (function() { ... })();
*/

(function () {
    let internalSecret = "I am hidden from the world";
    console.log("8. IIFE: I executed immediately!");
})();


// ---------------------------------------------------------
// ⚠️ CRITICAL WARNING: ARROW FUNCTIONS AS METHODS
// ---------------------------------------------------------
/*
While Arrow functions are great, they have one major limitation:
They DO NOT have their own 'this' keyword. 

If you use an Arrow function as a method, it will look for 'this' 
outside the object, which usually results in 'undefined'.
*/

const userObj = {
    name: "Saif",
    // Traditional Method (Works ✅)
    sayHi() {
        console.log("Method Warning: Hello", this.name);
    },
    // Arrow Function Method (Fails ❌)
    sayHiArrow: () => {
        console.log("Method Warning (Arrow): Hello", this.name);
    }
};

userObj.sayHi();      // Output: Hello Saif
userObj.sayHiArrow(); // Output: Hello undefined


/*
💡 FINAL SUMMARY FOR BEGINNERS:
- Declaration: function myFunc() {} (Hoisted)
- Expression: const myFunc = function() {} (Not Hoisted)
- Arrow: const myFunc = () => {} (Modern, concise)
- IIFE: (function(){})() (Runs instantly)
- Params: Inputs. Return: Outputs.
*/

