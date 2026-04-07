/**
 * MODULE 14: PROMISES
 * 
 * In the last module, we saw that "Callbacks" can get messy (Callback Hell).
 * Promises were introduced to make asynchronous code look and behave 
 * more like synchronous code.
 * 
 * In this module we will learn:
 * 1. What is a Promise? (The Analogy)
 * 2. Promise States (Pending, Resolved, Rejected)
 * 3. Consuming Promises (.then, .catch, .finally)
 * 4. Chaining Promises
 * 5. Static Methods (Promise.all, Promise.race)
 */

// ---------------------------------------------------------
// 1. THE PROMISE ANALOGY (Ordering a Burger)
// ---------------------------------------------------------
/*
LAYMAN EXPLANATION:
Imagine you order a Burger. The shop gives you a "Buzzer". 
This buzzer is a PROMISE:
1. PENDING: The burger is being cooked. You don't have it yet.
2. RESOLVED (Success): The buzzer glows! You get your burger. ✅
3. REJECTED (Failure): The waiter tells you "Sorry, we ran out of bread." ❌
*/

// ---------------------------------------------------------
// 2. CREATING A PROMISE
// ---------------------------------------------------------

const burgerPromise = new Promise((resolve, reject) => {
    console.log("1. Order placed: Waiting for burger... 🍔");

    const isBreadAvailable = true; // Change this to false to see the error!

    setTimeout(() => {
        if (isBreadAvailable) {
            resolve("Here is your delicious Burger! 🍔✨"); // Success!
        } else {
            reject("Sorry, we are out of bread. 🥖❌"); // Failure!
        }
    }, 2000);
});


// ---------------------------------------------------------
// 3. CONSUMING A PROMISE (.then / .catch)
// ---------------------------------------------------------

burgerPromise
    .then((food) => {
        // Runs only if RESOLVED
        console.log("2. Success:", food);
    })
    .catch((error) => {
        // Runs only if REJECTED
        console.log("2. Error:", error);
    })
    .finally(() => {
        // Runs NO MATTER WHAT (Used for cleanup)
        console.log("2. Finally: Cleaning the table. 🧹");
    });


// ---------------------------------------------------------
// 4. PROMISE CHAINING (The Fix for Callback Hell)
// ---------------------------------------------------------
/*
Instead of nesting functions, we return a new promise from a .then() 
and chain another .then() after it.
*/

function stepOne() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 Done"), 1000);
    });
}

function stepTwo(message) {
    return new Promise(resolve => {
        setTimeout(() => resolve(message + " -> Step 2 Done"), 1000);
    });
}

// Beautiful clean chain
stepOne()
    .then(res1 => stepTwo(res1))
    .then(res2 => console.log("\n4. Chaining Result:", res2))
    .catch(err => console.log(err));


// ---------------------------------------------------------
// 5. STATIC METHODS (Doing multiple things at once)
// ---------------------------------------------------------

const p1 = new Promise(res => setTimeout(() => res("API 1 Data"), 1000));
const p2 = new Promise(res => setTimeout(() => res("API 2 Data"), 2000));

// 5.1 Promise.all -> Waits for ALL to finish. Returns an array.
Promise.all([p1, p2]).then(results => {
    console.log("\n5.1 Promise.all:", results);
});

// 5.2 Promise.race -> Returns the result of the FASTEST one.
Promise.race([p1, p2]).then(winner => {
    console.log("5.2 Promise.race (The winner is):", winner);
});

// 5.3 Promise.allSettled -> The "Safe" version.
// Unlike .all (which fails if one rejects), this waits for EVERY result.
const pErr = Promise.reject("API 3 Failed! ❌");
Promise.allSettled([p1, p2, pErr]).then(results => {
    console.log("\n5.3 Promise.allSettled (Safe):", results);
    // Returns an array of objects with { status, value/reason }
});


// ---------------------------------------------------------
// 6. MICROTASK QUEUE (Interview Favorite)
// ---------------------------------------------------------
/*
DANGER: Promises have higher priority than timers!
1. Macrotasks (setTimeout, setInterval)
2. Microtasks (Promises)

The Event Loop clears ALL Microtasks before it moves to the next Macrotask.
*/

console.log("\n6. Priority Check:");

setTimeout(() => console.log("6. Macrotask: setTimeout logged (Timer)"), 0);

Promise.resolve().then(() => console.log("6. Microtask: Promise logged (Priority)"));

console.log("6. Main Thread: Standard log");
// Order will be: Main Thread -> Microtask (Promise) -> Macrotask (Timer)


/*
💡 SUMMARY FOR BEGINNERS:
- A Promise is an object representing a future value.
- .then()  : Handle success.
- .catch() : Handle error.
- .finally(): Always runs at the end.
- Chaining : Helps avoid "Callback Hell" by keeping code flat.
*/
