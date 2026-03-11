/**
 * Iteration Patterns
 * 
 * This is the main topic of iteration patterns and it is very important to understand it well.
 * 
 * you will be using this topic in almost every project you work on.
 * 
 * if you are good in this topic then you can solve almost any problem and learn other concepts of js easily. 
 * 
 * so,we will start this module 
 * 
 * In this module we will learn about:
 * 
 * 1. Manual Loops: for, while, do while
 * 2. Collection Loops: for...of, for...in
 * 3. Object Iteration: Object.keys, Object.values, Object.entries
 * 4. Loop Control Statements: break, continue
 * 5. Nested Loops
 * 6. Breaking Nested Loops (Labels)
 * 
 * Note: Functional Iteration (map, filter, etc.) will be covered in Module 12 
 * after we master Functions and Callbacks!
 * 
 * we will start with examples
 */


// 1. MANUAL LOOPS: for, while, do while

// 1.1 FOR LOOP
/*
The 'for' loop is the most common loop. You use it when you know EXACTLY 
how many times you want the code to run.

Syntax has 3 parts:
1. Initialization: Where do we start? (e.g., let i = 0)
2. Condition: When do we stop? (e.g., as long as i < 5)
3. Increment/Decrement: How do we move forward? (e.g., i++)
*/

// Example: Counting from 0 to 4
for (let i = 0; i < 5; i++) {
    console.log("1.1 For Loop (Count):", i);
}
// Output: 0, 1, 2, 3, 4


// Re-using iteration with an Array
// Loops are incredibly useful for going through lists (arrays) one by one.
let fruits = ["apple", "banana", "orange", "grapes", "mango"];

// We start at index 0, and keep going as long as 'i' is less than the total number of fruits.
for (let i = 0; i < fruits.length; i++) {
    console.log(`1.1 For Loop (Array): Fruit #${i} is ${fruits[i]}`);
}
// Output: Fruit #0 is apple, Fruit #1 is banana, etc.


// 1.2 WHILE LOOP
/*
The 'while' loop is used when you DON'T know exactly how many times 
the loop will run, but you want it to keep going until a certain condition becomes false.

Notice that we have to step forward (i++) MANUALLY inside the loop instead of at the top!
*/

// Example: Looping through the array using 'while'
let i = 0; // We declare the starting point outside the loop

while (i < fruits.length) { // The condition
    console.log("1.2 While Loop:", fruits[i]);
    i++; // Don't forget this! If you forget it, the loop will run forever (Infinite Loop ⚠️)
}
// Output: apple, banana, orange, grapes, mango


// 1.3 DO...WHILE LOOP
/*
The 'do...while' loop is exactly like the 'while' loop with one big difference:
It will ALWAYS run the code at least ONCE, even if the condition is false from the very beginning.

Why? Because it checks the condition at the END, not the beginning.
*/

// Example
let j = 0; // Starting point

do {
    // This code will run first, before asking any questions
    console.log("1.3 Do...While Loop:", fruits[j]);
    j++;
} while (j < fruits.length); // Now it asks: "Should we do it again?"

// Output: apple, banana, orange, grapes, mango


// Interesting Fact: A string is just a collection (array) of characters!
// So, we can use loops on strings too.
let str = "John";
// str[0] is 'J', str[1] is 'o', str[2] is 'h', str[3] is 'n'


// 2. COLLECTION LOOPS (for...of, for...in)
/*
Manual loops (like 'for') are great, but sometimes we just want to say: 
"Give me every single item in this list, I don't care about the index number."
That is where collection loops come in!
*/

// 2.1 FOR...OF LOOP (Used for Arrays and Strings)
/*
'for...of' goes through "Iterables" (things that have a specific order).
It grabs the actual VALUE of each item.
*/

// Array Example
for (let fruit of fruits) {
    console.log("2.1 For...Of (Array):", fruit);
}
// Output: apple, banana, orange, grapes, mango

// String Example
for (let char of str) {
    console.log("2.1 For...Of (String):", char);
}
// Output: J, o, h, n


// 2.2 FOR...IN LOOP (Used for Objects)
/*
Unlike arrays, Objects DO NOT have a specific order. 
So we can't use 'for...of'. Instead, we use 'for...in' which grabs the KEYS (property names).
*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    // We have the key (e.g., "name"), so we use bracket notation to get the value
    console.log(`2.2 For...In (Object): ${key} is ${person[key]}`);
}
// Output: name is John, age is 30, city is New York


/* 
⚠️ TWO IMPORTANT 'FOR...IN' GOTCHAS:

1. DO NOT use for...in for Arrays! 
   It iterates over the 'keys' (indexes) as STRINGS ("0", "1", "2"), not Numbers. 
   If you try to do 'key + 1', you'll get "01" instead of 1. Always use 'for...of' for Arrays.

2. It grabs "Inherited" properties. 
   If a property was added to the Object's prototype (the 'parent'), for...in will find it. 
   This is why modern Object iteration (Object.keys) is safer!
*/


// 3. MODERN OBJECT ITERATION (Object.keys, values, entries)
/*
While 'for...in' works, modern JavaScript developers prefer converting 
objects into Arrays first. Why? Because Arrays are easier to work with!

Object built-in methods turn objects into Arrays, allowing us to use 'for...of'.
*/

// 3.1 Object.keys() -> Returns an array of just the keys
let allKeys = Object.keys(person); // ["name", "age", "city"]

for (let key of allKeys) {
    // 💡 Pro Tip: Using console.group makes our console much cleaner!
    console.group(`3.1 Object.keys - Iterating: ${key}`);

    console.log("Key:", key);
    console.log("Value:", person[key]);
    console.log("Combined:", `${key} is ${person[key]}`);

    console.groupEnd();
}
/* 
Output in console:
▼ 3.1 Object.keys - Iterating: name
    Key: name
    Value: John
    Combined: name is John
...and so on for age and city.
*/


// 3.2 Object.values() -> Returns an array of just the values
let allValues = Object.values(person); // ["John", 30, "New York"]

for (let val of allValues) {
    console.log("3.2 Object.values:", val);

    // output: John, 30, New York
}


// 3.3 Object.entries() -> Returns an array of arrays! [[key, value], [key, value]]
// This is the most popular method because it gives you BOTH at the same time.
let allEntries = Object.entries(person);

// We use 'Destructuring' (which we learned in the Objects module) to grab key and value
for (let [key, value] of allEntries) {
    console.log(`3.3 Object.entries: Key is '${key}', Value is '${value}'`);

    // output: Key is 'name', Value is 'John'
    //         Key is 'age', Value is '30'
    //         Key is 'city', Value is 'New York'
}



// 4. LOOP CONTROL STATEMENTS
/*
These keywords allow you to control the flow of your loops.
*/

// 4.1 break -> Exits the loop immediately.

console.log("\n4.1 break:");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; // Stop the loop when i is 3
    }
    console.log(i);
}
// Output: 0, 1, 2


// 4.2 continue -> Skips the current iteration and moves to the next.

console.log("\n4.2 continue:");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the number 2
    }
    console.log(i);
}
// Output: 0, 1, 3, 4


// 5. NESTED LOOPS
/*
Loops inside loops. Useful for 2D arrays (grids) or complex operations.
*/

console.log("\n5. Nested Loops:");
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`  Inner Loop: ${j}`);
    }
}
/*
Output:
Outer Loop: 1
  Inner Loop: 1
  Inner Loop: 2
Outer Loop: 2
  Inner Loop: 1
  Inner Loop: 2
Outer Loop: 3
  Inner Loop: 1
  Inner Loop: 2
*/


// 6. BREAKING NESTED LOOPS (The 'Label' Technique)
/*
Standard 'break' only breaks the INNER loop. 
To break the OUTER loop, we use a 'label'.
*/

console.log("\n6. Breaking Nested Loops:");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            break outerLoop; // Breaks the 'outerLoop' (both loops)
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output: i: 1, j: 1, i: 1, j: 2, i: 1, j: 3, i: 2, j: 1
// It stops when i=2 and j=2


/* 
COMING SOON: FUNCTIONAL ITERATION 
In modern JavaScript, we often avoid manual loops and use powerful methods like 
.forEach(), .map(), and .filter(). 

However, these require an understanding of "Callback Functions". 
To keep things beginner-friendly, we will dive deep into these in Module 12: 
Higher-Order Functions & Functional Programming.
*/
