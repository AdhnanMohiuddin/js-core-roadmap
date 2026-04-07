/**
 * MODULE 22: RECURSION (The Function Mirror) 🌀
 * 
 * Recursion is a technique where a function calls ITSELF.
 * It's like looking into two mirrors facing each other—an endless loop 
 * unless you provide a "Stop Sign" (Base Case).
 */

// ---------------------------------------------------------
// 1. THE BASIC ANATOMY (Base Case vs recursion)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY (Russian Nesting Dolls):
To find the center prize, you open a doll (Recursive Step). 
If there's ANOTHER doll inside, you open that too. 
When you find a doll that DOESN'T open, you stop (Base Case).
*/

function countdown(n) {
    // 1.1 THE BASE CASE (The Stop Sign) 🛑
    // This is the condition that tells the function to STOP.
    if (n <= 0) {
        console.log("1.1 Base Case reached: Liftoff! 🚀");
        return; 
    }

    // 1.2 THE RECURSIVE STEP (The Inception) 🔄
    // We do a small piece of work, then call the function again.
    console.log(`1.2 Recursive Step: Counting ${n}...`);
    countdown(n - 1); // Calling itself with a smaller number
}

console.log("--- SECTION 1: BASIC RECURSION ---");
countdown(3);


// ---------------------------------------------------------
// 2. THE CALL STACK & OVERFLOW (Stack Overflow)
// ---------------------------------------------------------
/*
Every time a function calls itself, it gets "piled up" in memory 
on the Call Stack. If you forget your Base Case, the 
stack hits its limit—the browser crashes with "Stack Overflow".
*/

function infinite() {
    // Uncommenting below will crash your tab! ⚠️
    // infinite(); 
}
console.log("\n2. Call Stack: Remember to always have a Base Case to avoid crashes.");


// ---------------------------------------------------------
// 3. MATH POWER: FACTORIALS (5!)
// ---------------------------------------------------------
/*
A Factorial (like 5!) is 5 * 4 * 3 * 2 * 1. 
The rule: Factorial(n) is [n * Factorial(n - 1)]
*/

function factorial(n) {
    // Base Case: 1! is just 1
    if (n === 1) return 1; 
    
    // Recursive Step
    return n * factorial(n - 1);
}

console.log("\n--- SECTION 3: MATH LOGIC ---");
let factResult = factorial(5);
console.log(`3.1 Factorial Result (5!):`, factResult); // Output: 120


// ---------------------------------------------------------
// 4. DATA LOGIC: SUMMING AN ARRAY
// ---------------------------------------------------------
/*
Instead of a 'for' loop, we can sum an array using recursion.
Formula: [First Number] + [Sum of the rest of the array]
*/

function sumArray(arr) {
    // Base Case: If the array is empty, the sum is 0
    if (arr.length === 0) return 0;
    
    // Recursive Step: Take the first item + sum(the rest)
    return arr[0] + sumArray(arr.slice(1));
}

console.log("\n--- SECTION 4: DATA SUMMATION ---");
const numbers = [10, 20, 30];
console.log(`4.1 Array Sum of [10, 20, 30]:`, sumArray(numbers));


// ---------------------------------------------------------
// 5. BOSS LEVEL: DEEP OBJECT SEARCH (Real World)
// ---------------------------------------------------------
/*
Recursion is the ONLY way to search through nested data 
(like a file folder system or a family tree) where you 
don't know how deep it goes.
*/

const familyTree = {
    name: "Grandpa",
    child: {
        name: "Dad",
        child: {
            name: "Me",
            child: null // The end of the chain
        }
    }
};

function findLastChild(person) {
    // Base Case: If there are no more children, THIS is the last child.
    if (person.child === null) {
        return person.name;
    }

    // Recursive Step: If there IS a child, look inside THAT child.
    console.log(`5.1 Searching deeper... current person: ${person.name}`);
    return findLastChild(person.child);
}

console.log("\n--- SECTION 5: REAL WORLD (DEEP SEARCH) ---");
const youngest = findLastChild(familyTree);
console.log(`5.2 The youngest in the tree is:`, youngest);


/*
💡 FINAL SUMMARY & REVISION:
- Recursion: A function calling itself.
- Base Case: The mandatory condition that stops the recursion.
- Recursive Step: The logic that moves the problem closer to the base case.
- Real World Use: Navigating nested objects (JSON), DOM trees, or file systems.
*/
