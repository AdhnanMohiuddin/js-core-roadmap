/**
 * MODULE 15: ASYNC / AWAIT (Syntactic Sugar for Promises)
 * 
 * Async/Await makes asynchronous code look and behave like synchronous code.
 * It is built on top of Promises - it doesn't replace them, it just makes
 * them much easier to read and write.
 * 
 * In this module we will learn:
 * 1. The 'async' Keyword
 * 2. The 'await' Keyword
 * 3. Error Handling (try...catch)
 * 4. Parallel vs Sequential execution
 */

// ---------------------------------------------------------
// 1. THE BASIC CONCEPT
// ---------------------------------------------------------
/*
- 'async' before a function means: "This function will always return a Promise."
- 'await' inside an async function means: "Pause here until the Promise is finished."
*/

const kitchenTask = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("Coffee is ready! ☕"), 2000);
    });
};

// The Old Way (Promise Chaining)
//kitchenTask().then(status => console.log(status));

// The Modern Way (Async/Await)
async function startMorning() {
    console.log("1. Starting the day...");

    // Code pauses here for 2 seconds, but doesn't block the whole browser!
    const status = await kitchenTask();

    console.log("1. Result:", status);
    console.log("1. End of task.");
}

startMorning();


// ---------------------------------------------------------
// 2. ERROR HANDLING (The 'try...catch' pattern)
// ---------------------------------------------------------
/*
With Promises, we used .catch(). 
With Async/Await, we use standard JavaScript try...catch blocks.
*/

const checkInternet = () => {
    return new Promise((resolve, reject) => {
        const connected = false;
        setTimeout(() => {
            if (connected) resolve("Online ✅");
            else reject("No Internet Connection ❌");
        }, 1500);
    });
};

async function loadWebsite() {
    try {
        console.log("\n2. Connecting to server...");
        const status = await checkInternet();
        console.log("2. Status:", status);
    } catch (error) {
        console.log("2. Catch Block:", error);
    } finally {
        console.log("2. Final Step: Attempt finished.");
    }
}

loadWebsite();


// ---------------------------------------------------------
// 3. PARALLEL VS SEQUENTIAL execution
// ---------------------------------------------------------
/*
BEGINNER PITFALL:
If you await every single line, you might make your code slow.
If Task A and Task B don't depend on each other, run them at the same time!
*/

const taskA = () => new Promise(res => setTimeout(() => res("A Done"), 2000));
const taskB = () => new Promise(res => setTimeout(() => res("B Done"), 2000));

// SLOW WAY (Takes 4 seconds total)
async function runSlowly() {
    console.time("Slow Way");
    await taskA();
    await taskB();
    console.timeEnd("Slow Way"); // ~4000ms
}

// FAST WAY (Takes 2 seconds total)
async function runFast() {
    console.time("Fast Way");
    // We start both promises at the same time
    const results = await Promise.all([taskA(), taskB()]);
    console.log("\n3. Fast Results:", results);
    console.timeEnd("Fast Way"); // ~2000ms
}

runSlowly().then(() => runFast());


// 4. TOP-LEVEL AWAIT (Modern JS)
// ---------------------------------------------------------
/*
In the past, you ALWAYS needed an 'async' function to use 'await'.
In modern JS (Modules), you can use 'await' at the very top of your file!
*/

// Example (Wait for 1s at the start of the file)
// await new Promise(res => setTimeout(res, 1000));
// console.log("4. Top-level await finished!");


// ---------------------------------------------------------
// 5. COMMON PITFALL: FORGOT TO AWAIT
// ---------------------------------------------------------
/*
If you call an async function but forget the 'await', 
you get the PROMISE OBJECT (pending), not the DATA.
*/

async function getData() {
    return "Secret Data 🔐";
}

async function showPitfall() {
    const wrongWay = getData(); // Forgot 'await'!
    const rightWay = await getData();

    console.log("\n5. Pitfall Example:");
    console.log("   Wrong (Forgot await):", wrongWay); // Logs: Promise {<pending>}
    console.log("   Right (With await):  ", rightWay); // Logs: "Secret Data 🔐"
}

showPitfall();


/*
💡 FINAL SUMMARY FOR BEGINNERS:
- async: Declares an asynchronous function.
- await: Pauses code execution inside the async function.
- try...catch: The standard way to handle async errors now.
- Top-level await: Allows await outside of functions in modern environments.
- Performance: Use Promise.all with await for independent tasks.
*/


