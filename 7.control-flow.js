/**
 * Control flow is the order in which the statements are executed in a program.
 * 
 * in this module we will learn about:
 * 1. if statement
 * 2. if...else statement
 * 3. if...else if...else statement
 * 4. switch statement
 * 5. ternary operator
 * 6. guard clauses
 * 7. truthy and falsy values
 * 
 * so,we will directly start with the examples.
 */


//1. if statement
/**
 * CONTROL FLOW IN JAVASCRIPT
 * 
 * Control flow is the order in which statements are executed in a script.
 * By default, code runs line by line from top to bottom.
 * We use control flow to make decisions: "If this happens, do A; otherwise, do B."
 */

// 1. IF STATEMENT
/*
The 'if' statement is the most basic control structure.
Syntax:
 */
/*
if (condition) {
    // code to run if condition is true
}
*/
let age = 20;
if (age >= 18) {
    console.log("1. If Statement: User is eligible to vote.");
    // Output: 1. If Statement: User is eligible to vote.
}


// 2. IF...ELSE STATEMENT
/*
Use this when you want to handle both the "True" and "False" scenarios.
Syntax:
if (condition) {
    // code if true
} else {
    // code if false
}
*/
let isRaining = false;
if (isRaining) {
    console.log("2. If-Else: Take an umbrella.");
} else {
    console.log("2. If-Else: Enjoy the sunshine!");
    // Output: 2. If-Else: Enjoy the sunshine!
}


// 3. IF...ELSE IF...ELSE STATEMENT
/*
Use this for multiple conditions (more than 2 options).
Syntax:
if (condition1) {
    // block 1
} else if (condition2) {
    // block 2
} else {
    // block 3 (default)
}
*/
let time = 14; // 2 PM

if (time < 12) {
    console.log("3. Else-If: Good Morning!");
} else if (time < 18) {
    console.log("3. Else-If: Good Afternoon!");
    // Output: 3. Else-If: Good Afternoon!
} else {
    console.log("3. Else-If: Good Evening!");
}


// 4. SWITCH STATEMENT
/*
A cleaner way to check a single variable against many fixed values.
It is often preferred over long 'else if' chains for readability.

Syntax:
switch (expression) {
    case value1: 
        // code
        break;
    ...
    default:
        // code
}
*/
let day = "Saturday";

switch (day) {
    case "Monday":
        console.log("4. Switch: Start of the work week.");
        break;
    case "Friday":
        console.log("4. Switch: Weekend is coming!");
        break;
    // Grouped Cases: Saturday and Sunday share the same outcome
    case "Saturday":
    case "Sunday":
        console.log("4. Switch: It's the Weekend! 🎉");
        break;
    default:
        console.log("4. Switch: Just another week day.");
}
// Output: 4. Switch: It's the Weekend! 🎉

/* 
💡 Note: Always use 'break' to stop the execution. 
If you forget it, JS will run the next case even if it doesn't match!
*/


// 5. TERNARY OPERATOR (?)
/*
The ternary operator is a shorthand for the if...else statement.
It is often used for simple conditional assignments.

the syntax is:
condition ? expressionIfTrue : expressionIfFalse
*/

// Practical Example: Checking if a number is Even or Odd
let number = 10;

// Using if...else
let result1;
if (number % 2 === 0) {
    result1 = "Even";
} else {
    result1 = "Odd";
}

// Using Ternary Operator (More concise!)
let result2 = (number % 2 === 0) ? "Even" : "Odd";

console.log("5. Ternary Output:", result2);
// Output: Ternary Output: Even

/*
Note: While concise, avoid nesting ternary operators too deeply as it can make the code hard to read.
*/


// 6. GUARD CLAUSES
/*
A modern pattern to handle "Invalid" or "Edge Case" logic at the very beginning.
This prevents the code from becoming "Nested" (The Pyramid of Doom).

Instead of: if (true) { if (true) { ... } }
We use: if (false) return;
*/
function checkWithdrawal(amount, balance) {
    // Guard Clause 1: Check if amount is valid
    if (amount <= 0) {
        console.log("6. Guard Clause: Amount must be greater than 0.");
        return;
    }

    // Guard Clause 2: Check for sufficient balance
    if (amount > balance) {
        console.log("6. Guard Clause: Insufficient funds.");
        return;
    }

    // Main Logic: Only runs if all guards are passed
    console.log(`6. Guard Clause: Withdrawal of $${amount} successful!`);
}

checkWithdrawal(-50, 100); // Output: Guard Clause: Amount must be greater than 0.
checkWithdrawal(200, 100); // Output: Guard Clause: Insufficient funds.
checkWithdrawal(50, 100);  // Output: Guard Clause: Withdrawal of $50 successful!


// 7. TRUTHY AND FALSY VALUES
/*
In JS, every value can be treated as 'true' or 'false' inside a condition.

// we have 6 falsy values
FALSY Values: false, 0, "", null, undefined, NaN
TRUTHY Values: Everything else (including "0", "false", [], {})
*/
let emailInput = ""; // User didn't type anything

if (emailInput) {
    console.log("7. Truthy/Falsy: Email received.");
} else {
    console.log("7. Truthy/Falsy: Please enter your email.");
    // Output: 7. Truthy/Falsy: Please enter your email.
}


// --- 🟢 ADVANCED MODERN CONTROL FLOW ---

// 8. SHORT-CIRCUITING (&& and ||)
// && (AND): Runs the second part only if the first is TRUE.
let isUserLoggedIn = true;
isUserLoggedIn && console.log("8. Short-Circuit: Loading Dashboard...");

// || (OR): Provides a default value if the first part is FALSE.
let inputName = "";
let nameToUse = inputName || "Anonymous";
console.log("8. Short-Circuit Default Name:", nameToUse); // Output: Anonymous


// 9. NULLISH COALESCING (??)
// Improvement over OR (||). 
// ONLY triggers for null or undefined. Keeps 0 and "" as valid values.
let clickCount = 0;
let displayCount1 = clickCount || 10; // Becomes 10 (Incorrect: 0 is a valid count)
let displayCount2 = clickCount ?? 10; // Stays 0 (Correct!)

console.log("9. Nullish result (??):", displayCount2); // Output: 0


// 10. OPTIONAL CHAINING (?.)
// Safely reads nested data. If a parent is missing, it returns 'undefined' instead of crashing.
let user = { profile: { /* bio missing */ } };

console.log("10. Optional Chaining Bio:", user.profile?.bio?.text);
// Output: 10. Optional Chaining Bio: undefined (No crash!)


/*
🚩 FINAL BEST PRACTICE:
Keep your code 'FLAT'. Use Guard Clauses to handle errors at the top 
so the rest of your logic can breathe without being inside 5 if-statements.
*/