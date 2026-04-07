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
// 1. CALLBACK FUNCTIONS (The Engine)
// ---------------------------------------------------------
/*
DEFINITION: A Callback is a function passed as an argument to 
another function, intended to be executed "later".

LAYMAN ANALOGY (The Ordering System):
When you order food, you give the shop your phone number (The Callback). 
The shop is the "Boss" function. Your number is the "Task" to do when 
the food is ready.
*/

// 1.1 The Basic "Task for Later"
function notifyManager() {
    console.log("   Manager: Task completed! ✅");
}

function finishWork(taskName, callback) {
    console.log(`1.1 Process: Working on ${taskName}...`);
    callback(); // We EXECUTE the callback here
}

// CRITICAL RULE: Give the name of the function, NOT notifyManager()
finishWork("Monthly Audit", notifyManager);


// 1.2 Passing Data TO a Callback
// The "Boss" function can give data to the "Worker"
function processNumbers(num1, num2, operation) {
    console.log("\n1.2 Process: Performing math...");
    return operation(num1, num2); // The operation is the callback
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log("   Sum:", processNumbers(5, 5, add));
console.log("   Product:", processNumbers(5, 5, multiply));


// 1.3 The Difference: Reference vs. Execution
/*
MISTAKE: finishWork("Audit", notifyManager()); 
If you add (), the function runs IMMEDIATELY. 
You must pass the function REFERENCE (the name only).
*/


// ---------------------------------------------------------
// 1.4 THE "PLUGIN" ANALOGY (Why do we use this?)
// ---------------------------------------------------------
/*
Imagine a "Smart Oven". It knows HOW to heat up, but it has no 
idea WHAT you want to cook. 

- The Oven is the Higher-Order Function.
- The Recipe is the CALLBACK (the plugin).

The oven runs its general code (Heating up...), and then it 
calls your specific "Recipe" at the perfect time.
*/

function startSmartOven(foodName, recipeCallback) {
    console.log(`\n1.4 Machine: Preheating for ${foodName}... 🌡️`);
    console.log("1.4 Machine: Oven at 200 degrees.");

    // The machine now says: "Now I will use YOUR specific instructions!"
    recipeCallback();

    console.log("1.4 Machine: Work finished! 🔔");
}

// Plugin #1: The Pizza Recipe
startSmartOven("Pizza", () => {
    console.log("   Plugin: Baking for 15 minutes... 🍕");
});

// Plugin #2: The Cookie Recipe
startSmartOven("Cookies", () => {
    console.log("   Plugin: Baking for 8 minutes until golden... 🍪");
});


// ---------------------------------------------------------
// 1.5 THE "DECISION" (Using Callbacks with Logic)
// ---------------------------------------------------------
/*
Callbacks aren't just for printing. We use them so the BOSS 
function can make decisions based on the WORKER'S rules.
*/

function validateUser(username, checkRules) {
    const isValid = checkRules(username); // Using the callback rules

    if (isValid) {
        console.log(`\n1.5 System: Access GRANTED for ${username} ✅`);
    } else {
        console.log(`\n1.5 System: Access DENIED for ${username} ❌`);
    }
}

// Custom Rule: Username must be longer than 5 letters
const lengthRule = (name) => name.length > 5;

validateUser("Ad", lengthRule);      // Denied!
validateUser("AdnanMM", lengthRule); // Granted!


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


// ---------------------------------------------------------
// 8. ITERATING OBJECTS WITH HOFs (The Pro Way)
// ---------------------------------------------------------
/*
Objects themselves don't have .map() or .forEach(). 
To use these tools, we first turn the Object into an Array 
using Object.entries().
*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// This gives us: [ ["name", "John"], ["age", 30], ["city", "New York"] ]
const details = Object.entries(person);

console.log("\n8. Object Iteration:");

// 8.1 The "Just Printing" approach (Side Effects)
// If we just want to log, forEach is the correct tool.
details.forEach(([key, value]) => {
    console.log(`   Key: ${key}, Value: ${value}`);
});


// 8.2 The "Transformation" approach (Mapping)
// PROBLEM: If we use .map() inside a function but don't RETURN the result, 
// we won't see anything outside that function!

const mapConcept = () => {
    // We RETURN the new array created by .map()
    return details.map(([key, value]) => `Property: ${key} is ${value}`);
};

console.log("\n8.2 Map in a function (Returning a list):");
console.log(mapConcept());


/*
💡 IMPORTANT DISTINCTION:
- .map()     -> Use this if you want to COLLECT the results into a new array.
- .forEach() -> Use this if you just want to DO something (like console.log) 
                and you don't care about a return value.
*/


/*
💡 FINAL SUMMARY & REVISION:
- Callbacks: Passing a "Task" to be done later.
- HOFs: Functions that "manage" other functions.
- .forEach: Execute code for every item (does not return a list).
- .map: Transform every item (returns a new list).
- .filter: Select specific items (returns a new list).
- .reduce: Combine all items into ONE value.
- Object.entries: Bridge that lets objects use Array HOFs!
*/
