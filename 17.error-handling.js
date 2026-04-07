/**
 * MODULE 17: ERROR HANDLING & DEBUGGING
 * 
 * In real-world code, things will fail (No Internet, Bad Input, Broken APIs).
 * A "Hero" doesn't let their app crash; they catch the error and handle it!
 * 
 * In this module we will learn:
 * 1. The try...catch...finally structure (The Safety Net)
 * 2. Creating Custom Errors with 'throw'
 * 3. The 'Error' Object (name, message, stack)
 * 4. Error Propagation (Bubbling up)
 */

// ---------------------------------------------------------
// 1. THE SAFETY NET (try...catch)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
Imagine you are walking on a tightrope (The 'try' block).
Below you is a Safety Net (The 'catch' block).

If you trip (An Error occurs), you don't hit the ground (The app crash). 
You fall into the net, and you can simply get back up and continue.
*/

console.log("1. Safety Net Example:");

try {
    // Let's try something impossible (Using a variable that doesn't exist)
    console.log(secretVariable); 
    console.log("This will never run!");
} catch (error) {
    console.log("1. Catch: An error occurred! 🛑");
    console.log(`   Internal Message: ${error.message}`);
} finally {
    console.log("1. Finally: This runs whether it fails OR succeeds! ✨");
}


// ---------------------------------------------------------
// 2. CREATING YOUR OWN ERRORS (throw)
// ---------------------------------------------------------
/*
Sometimes, code doesn't technically "Fail", but it's "Wrong" for your app.
E.g., A person who is Under 18 trying to register for a bank account.
We use 'throw' to manually trigger our own errors.
*/

function registerUser(age) {
    if (age < 18) {
        // We 'throw' a custom error message
        throw new Error("User must be at least 18 years old.");
    }
    console.log("2. Registration: Welcome to the bank! 🏦");
}

console.log("\n2. Custom Errors:");

try {
    registerUser(16); // This will trigger the manual error
} catch (err) {
    console.log("2. Caught Manual Error:", err.message);
}


// ---------------------------------------------------------
// 3. ERROR BUBBLING (Propagation)
// ---------------------------------------------------------
/*
If a function doesn't catch an error, it "Bubbles" up to the 
person who called it. This continues until it hits a catch 
block or reaches the very top and crashes the script.
*/

function levelThree() {
    throw new Error("Oops! Something broke in Level 3. 💥");
}

function levelTwo() {
    levelThree(); // Passing the bomb!
}

function levelOne() {
    try {
        levelTwo(); // We catch the bomb here at the top!
    } catch (e) {
        console.log("\n3. Error Bubbling:");
        console.log(`   Caught the error here: ${e.message}`);
    }
}

levelOne();


// ---------------------------------------------------------
// 4. RETRY LOGIC (Pro Technique)
// ---------------------------------------------------------
/*
If a network request fails once, a "Hero" might try it again!
*/

let attempts = 0;

function serverRequest() {
    attempts++;
    console.log(`\n4. Retry: Attempt #${attempts}...`);

    if (attempts < 3) {
        throw new Error("Server Busy ⌛");
    }
    console.log("4. Retry: Finally connected to the server! ✅");
}

function connectWithRetry() {
    try {
        serverRequest();
    } catch (err) {
        console.log(`   Failed because of: ${err.message}`);
        if (attempts < 3) {
            connectWithRetry(); // Attempting again (Recursive)
        } else {
            console.log("4. Retry: Gave up after 3 tries. 🛑");
        }
    }
}

connectWithRetry();


// ---------------------------------------------------------
// 5. THE "BIG THREE" ERRORS (Decoding the Console)
// ---------------------------------------------------------
/*
You'll see these 3 Errors most often. Knowing the difference 
is like being a doctor for your code.
*/

// 5.1 REFERENCE ERROR -> "I don't know who this is!"
// You tried to use a variable that was never declared.
// Example: console.log(unknownVar);


// 5.2 TYPE ERROR -> "I don't do that!"
// You tried to do something a variable CAN'T do.
// Example: const x = 10; x.toUpperCase(); // Numbers can't be uppercase!


// 5.3 SYNTAX ERROR -> "I don't understand your language!"
// You missed a bracket, a comma, or used a reserved word.
// Example: if (true { console.log("Missing bracket"); }


// ---------------------------------------------------------
// 6. ASYNC ERROR HANDLING (The Modern Standard)
// ---------------------------------------------------------
/*
When working with Fetch or Promises, try...catch is the elite way.
*/

async function saferFetch(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Status: ${response.status}`);
        return await response.json();
    } catch (err) {
        console.log(`\n6. Async Catch: API call failed for ${url} ❌`);
        console.log(`   Detailed Reason: ${err.message}`);
    }
}

saferFetch("https://invalid-url-here.com");


/*
💡 FINAL SUMMARY & REVISION:
- try: Where you put risky code.
- catch: Where you handle the error (don't leave it empty!).
- finally: Clean-up that always runs (Closing files/databases).
- throw: Manually creating an error to stop execution.
- Native Error Types: Reference (Missing Var), Type (Bad Action), Syntax (Bad Grammar).
*/
