/**
 * MODULE 16: JSON & FETCH API (Networking)
 * 
 * This is where your code connects to the real world!
 * In this module we will learn:
 * 1. What is JSON? (The Language of the Web)
 * 2. JSON Methods: stringify() and parse()
 * 3. The Fetch API: Getting data from a Server
 * 4. Handling Requests with Async/Await
 */

// ---------------------------------------------------------
// 1. WHAT IS JSON? (The Analogy)
// ---------------------------------------------------------
/*
JSON stands for JavaScript Object Notation.

LAYMAN ANALOGY (The IKEA Furniture):
Imagine you want to send a Table (an Object) to a friend. 
- You can't send the table as it is (it's too big).
- You "Flat-pack" it into a Box with instructions (JSON String).
- Your friend gets the box and "Assembles" it back into a Table (Object).

JSON is just a STRING that looks like a JS object, used for 
sending data between servers and browsers.
*/


// ---------------------------------------------------------
// 2. JSON METHODS (The Packing & Unpacking)
// ---------------------------------------------------------

const userProfile = {
    id: 1,
    name: "Adnan Mohiuddin",
    skills: ["JS", "React", "Node"]
};

// 2.1 JSON.stringify() -> "Packing the Box"
// Converts a JS Object into a JSON String.
const jsonPackage = JSON.stringify(userProfile);

console.log("2.1 Stringify (Object to String):");
console.log(jsonPackage); 
console.log(typeof jsonPackage); // "string"


// 2.2 JSON.parse() -> "Assembling the Furniture"
// Converts a JSON String back into a usable JS Object.
const receivedData = JSON.parse(jsonPackage);

console.log("\n2.2 Parse (String back to Object):");
console.log(receivedData.name); 
console.log(receivedData.skills[0]); // Now we can use array methods again


// 2.3 THE "DEEP CLONE" HACK (Pro Trick)
/*
If you want to create a TRULY separate copy of an object (not just a 
reference), you can stringify it and immediately parse it back.
*/
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 99; // Doesn't change the original!


// 2.4 THE "CIRCULAR" TRAP (Interview Question)
/*
DANGER: If an object points to itself, JSON.stringify() will EXPLODE.
const self = {}; self.me = self;
JSON.stringify(self); // Error: Converting circular structure to JSON
*/


// ---------------------------------------------------------
// 3. THE FETCH API (The Delivery Service)
// ---------------------------------------------------------
/*
'fetch()' is a built-in browser tool used to request data from 
a URL (an API). It returns a PROMISE.

API used here: JSONPlaceholder (A free fake API for testing)
*/

async function fetchPost() {
    try {
        console.log("\n3. Fetch: Requesting post #1...");
        
        // Step 1: Wait for the network response
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // Step 2: Extract the JSON body from the response
        // (This also returns a promise, so we MUST await it!)
        const data = await response.json();

        console.log("3. Data Received: ✅");
        console.log(`   Title: ${data.title}`);
        console.log(`   Body: ${data.body.slice(0, 30)}...`);

    } catch (error) {
        console.log("3. Network Error:", error.message);
    }
}

fetchPost();


// ---------------------------------------------------------
// 4. REAL WORLD EXAMPLE: GitHub API
// ---------------------------------------------------------

async function getGitHubUser(username) {
    try {
        console.log(`\n4. GitHub: Looking up user "${username}"...`);
        
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
            throw new Error(`User not found! (Status: ${response.status})`);
        }

        const user = await response.json();

        console.log("4. GitHub Found! 🚀");
        // Using the OR (||) fallback: If name is null, use login instead.
        console.log(`   Name: ${user.name || "No name set (" + user.login + ")"}`);
        console.log(`   Public Repos: ${user.public_repos}`);
        console.log(`   Profile URL: ${user.html_url}`);

    } catch (err) {
        console.log("4. GitHub Error:", err.message);
    }
}

getGitHubUser("AdhnanMohiuddin"); // We call the function with a username


// ---------------------------------------------------------
// 5. SENDING DATA: THE POST REQUEST
// ---------------------------------------------------------
/*
By default, fetch() does a "GET" (Asking for data). 
If you want to "POST" (Send data), you must provide a second 
argument describing your package.
*/

async function createNewPost() {
    console.log("\n5. POST: Sending new data to server...");

    const myPackage = {
        title: 'Zero to Hero Progress',
        body: 'Learning Fetch like a Pro!',
        userId: 101
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // The "Stamp" that says we are SENDING
        body: JSON.stringify(myPackage), // The "Boxed" data
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    const data = await response.json();
    console.log("5. Server Response (ID Created):", data.id);
}

createNewPost();


/*
💡 FINAL SUMMARY & REVISION:
- JSON: A string format used to exchange data.
- JSON.stringify(): Object -> String (Sending data).
- JSON.parse(): String -> Object (Receiving data).
- fetch(): The modern way to make network requests.
- Flow: Fetch URL -> Await Response -> Await .json() -> Use Data!
- GET vs POST: Asking for data vs Sending new data.
*/
