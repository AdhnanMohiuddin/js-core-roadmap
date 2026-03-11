/**
 * MODULE 12: FUNCTIONAL ITERATION & ARRAY METHODS
 * 
 * In this module, we step into the world of "Functional Programming".
 * Higher-Order Functions (HOFs) are functions that:
 * 1. Take another function as an argument.
 * 2. Return a function as a result.
 * 
 * 
 * In JavaScript, functions are "First-Class Citizens". 
 * This means they can be passed around like values (variables).
 * 
 * In this module we will learn:
 * 1. Callback Functions
 * 2. Higher-Order Functions (HOFs)
 * 3. Functional Iteration (.forEach, .map, .filter, etc.)
 */

// ---------------------------------------------------------
// 1. CALLBACK FUNCTIONS
// ---------------------------------------------------------
/*
DEFINITION: A Callback is a function passed as an argument to 
another function, to be executed "later".

LAYMAN ANALOGY (Ordering Food):
When you order food, you give the shop your phone number (The Callback). 
You don't wait at the counter. When the food is ready, they use your number 
to call you back.
*/

function welcomeUser(name, callback) {
    console.log(`1. Process: Preparing welcome for ${name}...`);
    // After some "work", we execute the callback
    callback();
}

// Passing an anonymous function as the "callback"
welcomeUser("Adnan", function () {
    console.log("1. Callback: Welcome successfully sent! ✅");
});


// ---------------------------------------------------------
// 2. HIGHER-ORDER FUNCTIONS (HOFs)
// ---------------------------------------------------------
/*
DEFINITION: A Higher-Order Function is a function that either:
1. Takes one or more functions as arguments (like welcomeUser above).
2. Returns a function as its result (like we saw in Closures/Factories).

Think of a HOF as a "Boss" function that manages other "Worker" functions.
*/


// ---------------------------------------------------------
// 3. UNDERSTANDING .forEach() (The Loop Machine)
// ---------------------------------------------------------
/*
Instead of manual 'for' loops, we use the .forEach() method.

ANALOGY (The Washing Machine):
Imagine a box of clothes (The Array). 
- OLD WAY (for loop): You pick cloth #0, wash it. Pick cloth #1, wash it.
- NEW WAY (.forEach): You put the box in the machine and give it a 
  "Worker" (a function). The machine automatically picks every cloth and 
  gives it to the worker.
*/

const fruits = ["🍎", "🍌", "🍇", "🥭"];

console.log("\n3. .forEach in action:");

// .forEach(callbackFunc)
fruits.forEach(function (fruit, index) {
    console.log(`Item #${index}: ${fruit} -> Handled by Worker!`);
});


// ---------------------------------------------------------
// 4. THE TRANSFORMER: .map()
// ---------------------------------------------------------
/*
Use .map() when you want to change every single item in a list and 
get a BRAND NEW list as a result.

Original Array -> [Factory Belt] -> New Modified Array
*/

const prices = [100, 200, 300, 400];

// Example: Applying a 10% discount to all prices
const discounted = prices.map(price => price * 0.9);

console.log("\n4. .map():");
console.log("   Original Prices:", prices);
console.log("   Discounted Prices:", discounted);


// ---------------------------------------------------------
// 5. THE SECURITY GUARD: .filter()
// ---------------------------------------------------------
/*
Use .filter() when you want to keep only the items that pass a test.
Returns a NEW array with only the "winning" items.
*/

// Example: Keeping items that cost more than 250
const expensiveItems = prices.filter(price => price > 250);

console.log("\n5. .filter() (Prices > 250):", expensiveItems); // [300, 400]


// ---------------------------------------------------------
// 6. THE ACCUMULATOR: .reduce()
// ---------------------------------------------------------
/*
The most powerful (and complex) method. It "reduces" an entire array into 
ONE single value (like a total sum).

ANALOGY (The Snowball):
A tiny snowball (starting value) rolls through the array, picking up 
the value of every item until it becomes one giant ball at the end.
*/

// total = the "snowball" (accumulator)
// current = the current item being added
const grandTotal = prices.reduce((total, current) => {
    return total + current;
}, 0); // 0 is our starting total

console.log("\n6. .reduce() (Total Sum):", grandTotal); // 1000


// ---------------------------------------------------------
// 7. SEARCH & TRUTH: .find(), .some(), .every()
// ---------------------------------------------------------

// 7.1 .find() -> Returns the FIRST item that matches.
const found = fruits.find(f => f === "🍇");

// 7.2 .some() -> Checks if AT LEAST ONE matches (true/false).
const hasMelon = fruits.some(f => f === "🍉");

// 7.3 .every() -> Checks if ALL items match (true/false).
const allString = fruits.every(f => typeof f === "string");

console.log("\n7. Search & Truth:");
console.log("   .find(Grape):", found);
console.log("   .some(Melon?):", hasMelon);
console.log("   .every(All strings?):", allString);


/*
💡 FINAL SUMMARY & REVISION:
- Callbacks: Passing a "Task" to be done later.
- HOFs: Functions that "manage" other functions.
- .forEach: Execute code for every item (does not return a list).
- .map: Transform every item (returns a new list).
- .filter: Select specific items (returns a new list).
- .reduce: Combine all items into ONE value.
*/
