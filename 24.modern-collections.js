/**
 * MODULE 24: MODERN COLLECTIONS (Map & Set) 💎
 * 
 * Objects and Arrays are great, but sometimes they are too slow 
 * or don't have enough features. JavaScript added Map and Set 
 * to handle specific "Hero" tasks.
 */

// ---------------------------------------------------------
// 1. SETS (The VIP Guest List) 🎟️
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
A Set is a list where DUPLICATES ARE NOT ALLOWED. 
If you try to add "Adnan" twice, the Set will just ignore the second one.
*/

const guestList = new Set();

guestList.add("Adnan");
guestList.add("Zaid");
guestList.add("Adnan"); // 🛑 This will be ignored!

console.log("--- SECTION 1: SETS (UNIQUE VALUES) ---");
console.log("1.1 Guest List (Notice Adnan is only there once):", guestList);
console.log("1.2 Does Zaid exist?", guestList.has("Zaid")); // true (Very fast check!)
console.log("1.3 Total unique guests:", guestList.size);

// PRO TIP: How to remove duplicates from an array in 1 line:
const numbers = [1, 2, 2, 3, 4, 4, 4];
const uniqueNumbers = [...new Set(numbers)]; 
console.log("1.4 Duplicates removed from [1,2,2,3,4,4,4]:", uniqueNumbers);


// ---------------------------------------------------------
// 2. MAPS (The Super-Powered Object) 🗺️
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
A Map is like an Object, but it has "Super Strength":
1. It remembers the order you added things.
2. The 'Key' can be ANYTHING (a Number, an Object, even a Button!).
*/

const userPermissions = new Map();

// Using objects as KEYS (You can't do this with normal objects!)
const user1 = { id: 101, name: "Adnan" };
const user2 = { id: 102, name: "Guest" };

userPermissions.set(user1, "Admin");
userPermissions.set(user2, "Viewer");

console.log("\n--- SECTION 2: MAPS (ORDERED PAIRS) ---");
console.log("2.1 Getting permission for Adnan:", userPermissions.get(user1));
console.log("2.2 Total mappings:", userPermissions.size);

// Loop through a map easily:
userPermissions.forEach((role, user) => {
    console.log(`User ${user.name} has the role: ${role}`);
});


// ---------------------------------------------------------
// 3. OBJECT TOOLS: FREEZE & SEAL 🧊
// ---------------------------------------------------------
/*
Sometimes you want to make an object "Read-Only" so 
no one can accidentally delete or change your data.
*/

const config = {
    apiKey: "SECRET_123",
    version: 1.0
};

// A. Object.freeze() -> Total lockdown (No edits, no deletes, no additions)
Object.freeze(config);

config.version = 2.0; // 🛑 This will be silently ignored!
delete config.apiKey; // 🛑 This will be silently ignored!

console.log("\n--- SECTION 3: OBJECT LOCKDOWN ---");
console.log("3.1 Locked Config (Still version 1.0):", config);
console.log("3.2 Is it frozen?", Object.isFrozen(config));


/*
💡 FINAL SUMMARY:
- Set: Use when you need a UNIQUE list of items.
- Map: Use when you need a high-performance "dictionary" or want objects as keys.
- .size: Works for both (Arrays use .length, but Maps/Sets use .size).
- Object.freeze: Use when you want to protect your "Config" data from being changed.
*/
