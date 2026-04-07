/**
 * MODULE 13: ASYNCHRONOUS JAVASCRIPT BASICS
 * 
 * JavaScript is normally "Synchronous" - it does one thing at a time, in order.
 * But what happens when a task takes time (like fetching data from GitHub)?
 * 
 * In this module we will learn:
 * 1. Synchronous vs Asynchronous (The Blocking Problem)
 * 2. The Event Loop (The secret behind JS multitasking)
 * 3. Timers: setTimeout & setInterval
 * 4. Asynchronous Callbacks (Simulating an API Call)
 */

// ---------------------------------------------------------
// 1. SYNCHRONOUS VS ASYNCHRONOUS
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
Synchronous: A single-person coffee shop. You order, and EVERYONE behind you 
must wait until your coffee is made before they can even order. (Blocking)

Asynchronous: A modern cafe. You order, they give you a "Buzzer" (Callback), 
and you go sit down. They take the next person's order while your coffee is brewing.
*/

console.log("1. Starting Synchronous Task...");
console.log("   Task 1: Making Toast 🍞");
console.log("   Task 2: Spreading Jam 🍓");
console.log("1. Finished Synchronous Task!");


// ---------------------------------------------------------
// 2. TIMERS (setTimeout, setInterval, and clearing them)
// ---------------------------------------------------------
/*
'setTimeout' schedules a task to happen ONCE after a delay.
'setInterval' schedules a task to happen REPEATEDLY every delay.
*/

console.log("\n2. Timers in Action:");

// 2.1 setTimeout (Once)
const timerId = setTimeout(() => {
    console.log("2.1 Timeout: This will NEVER run because we clear it below.");
}, 5000);

// 2.2 clearTimeout (Stopping a timeout)
clearTimeout(timerId);
console.log("2.2 System: Timer 2.1 was cancelled successfully.");


// 2.3 setInterval (Repeatedly)
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`2.3 Interval: Heartbeat... (${count})`);

    // 2.4 clearInterval (Stopping an interval)
    if (count === 3) {
        clearInterval(intervalId);
        console.log("2.4 System: Interval stopped after 3 beats.");
    }
}, 1000);

console.log("2. System: Codes move forward while timers work in background...");


// ---------------------------------------------------------
// 3. THE EVENT LOOP (How it works under the hood)
// ---------------------------------------------------------
/*
Imagine JS has two main areas:
1. The Call Stack (What is happening RIGHT NOW)
2. The Web APIs / Task Queue (What is waiting to happen LATER)

The 'Event Loop' is like an office assistant. It waits until the 
Stack is EMPTY, then it checks the Queue to see if any completed 
timers or API calls are ready to be logged.
*/


// ---------------------------------------------------------
// 4. SIMULATING AN API CALL (Asynchronous Callbacks)
// ---------------------------------------------------------
/*
API stands for "Application Programming Interface". 
In the next modules, we will fetch REAL data from GitHub.
For now, let's simulate how we handle that data when it arrives "later".
*/

function fetchUserData(userId, callback) {
    console.log(`\n4. Requesting data for User: ${userId} from Server...`);

    // Simulating a network delay of 3 seconds
    setTimeout(() => {
        const data = { id: userId, username: "adnan_mohiuddin", status: "Gold" };
        console.log("4. Server: Data found! ✅");
        callback(data); // Passing the data back via the callback
    }, 3000);
}

// Handling the response
fetchUserData(101, (user) => {
    console.log("4. UI Update: User profile loaded for:", user.username);
});

console.log("4. Main Thread: Continuing to load other parts of the website...");


// ---------------------------------------------------------
// 5. THE PROBLEM: CALLBACK HELL (Intro)
// ---------------------------------------------------------
/*
When we have many async tasks that depend on each other, we end up 
nesting callbacks inside callbacks... This becomes "Callback Hell".
*/

/*
Example (Don't code like this!):
getUser(id, (user) => {
    getPosts(user.id, (posts) => {
        getComments(posts[0].id, (comments) => {
            console.log(comments);
        });
    });
});
*/

/*
💡 FINAL SUMMARY FOR BEGINNERS:
- Synchronous: One by one (Blocking).
- Asynchronous: Do it in the background, notify me when done (Non-blocking).
- Event Loop: Manages the timing between the main code and async tasks.
- setTimeout: Schedules a task for the future.
- Why it matters: Networking (APIs) take time; async handles that time smoothly.
*/
