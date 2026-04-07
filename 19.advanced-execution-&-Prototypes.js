/**
 * MODULE 19: ADVANCED EXECUTION & PROTOTYPES (The Final Boss)
 * 
 * If you understand this module, you understand the very "Soul" of JS.
 * In this module we will learn:
 * 1. Prototypes (The Hidden DNA of Objects)
 * 2. Prototypal Inheritance (The Chain)
 * 3. Modern Classes (Syntactic Sugar for the Chain)
 * 4. Advanced Event Loop (Microtasks vs Macrotasks)
 */

// ---------------------------------------------------------
// 1. PROTOTYPES (The Hidden DNA)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
Every object in JS was born with a "Secret DNA". 
If you try to use a property that the object doesn't have, it 
doesn't give up! It looks into its "Secret DNA" (the Prototype) 
to see if it exists there.
*/

const person = { name: "Adnan" };

console.log("1. Does person have a prototype?");
// The 'Secret DNA' is stored in __proto__ (but we use Object.getPrototypeOf)
console.log(Object.getPrototypeOf(person)); // This is the "Grandfather" Object


// ---------------------------------------------------------
// 2. THE PROTOTYPE CHAIN (The Ancestry)
// ---------------------------------------------------------
/*
When you call a function like .toString() or .map(), it usually 
doesn't live ON your object. It lives on the Prototype Chain.
*/

const myArr = [1, 2];
// 1st level: Array Prototype (has .map, .filter)
// 2nd level: Object Prototype (has .toString, .hasOwnProperty)
// 3rd level: null (The end of the road)

console.log("\n2. Finding the .map() method:");
console.log(myArr.hasOwnProperty('map')); // false (It's not ON the array)
console.log(Object.getPrototypeOf(myArr).hasOwnProperty('map')); // true! ✅


// ---------------------------------------------------------
// 3. PROTOTYPAL INHERITANCE (The Old School Power)
// ---------------------------------------------------------

function Animal(name) {
    this.name = name;
}

// Adding a method to the "DNA" so ALL animals share it
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating... 🍎`);
};

const dog = new Animal("Buddy");
dog.eat(); // Buddy is eating...


// ---------------------------------------------------------
// 4. MODERN CLASSES (The "Sweet" Cleaner Sugar)
// ---------------------------------------------------------
/*
Classes in JS aren't real "Classes" like in Java. 
They are just a BEAUTIFUL WAY to write the Prototype logic above.
*/

class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    usePower() {
        console.log(`\n4. ${this.name} used ${this.power}! 🔥`);
    }
}

const myHero = new Hero("Adnan", "Code Mastery");
myHero.usePower();


// ---------------------------------------------------------
// 5. ADVANCED EVENT LOOP: MICRO vs MACRO
// ---------------------------------------------------------
/*
This is the MOST asked interview question globally.
- MACROtasks: setTimeout, setInterval (The slow lane)
- MICROtasks: Promises (The VIP fast lane)

RULE: The Event Loop MUST clear the entire Microtask queue 
before it even starts ONE Macrotask.
*/

console.log("\n5. The Priority Race:");

setTimeout(() => console.log("   5. Macrotask (setTimeout) reached the finish... 🐢"), 0);

Promise.resolve().then(() => {
    console.log("   5. Microtask (Promise) reached the finish... ⚡");
});

console.log("   5. Main Script finished.");
// Order: Main Script -> Promise (Micro) -> setTimeout (Macro)


// ---------------------------------------------------------
// 6. EXECUTION CONTEXT (The Invisible Engine)
// ---------------------------------------------------------
/*
Whenever you run an app, JS creates an "Execution Context". 
It has TWO phases:
1. CREATION Phase: JS scans the code and reserves memory for 
   variables and functions (This is why HOISTING happens).
2. EXECUTION Phase: JS runs the code line-by-line and assigns values.
*/

const globalSecret = "I am a Global variable!";


// ---------------------------------------------------------
// 7. THE CALL STACK (The To-Do List)
// ---------------------------------------------------------
/*
The Call Stack is like a "Stack of Pringles". 
- First function in? Goes to the bottom.
- Latest function in? Stays at the top.
- JS only finishes a function when it can "Pop" it off the top!
*/

function inner() {
    console.log("   7. Call Stack: inner() is at the top!");
}

function outer() {
    console.log("   7. Call Stack: Calling inner()...");
    inner(); // inner is pushed ON TOP of outer
    console.log("   7. Call Stack: inner() is done, outer() is back on top.");
}

outer();


// ---------------------------------------------------------
// 8. STATIC METHODS (The Factory Tools)
// ---------------------------------------------------------
/*
Usually, methods are shared via the DNA (Prototype). 
But STATIC methods live only on the Factory (the Class), 
not on the individual products (the Objects).
*/

class Robot {
    constructor(name) {
        this.name = name;
    }

    // Instance method (All robots have this in their DNA)
    sayHi() {
        console.log(`\n8. Robot ${this.name}: Hello Master! 🤖`);
    }

    // Static method (Only the "Robot" Class possesses this tool)
    static buildCount() {
        return "I am a static method—you call me via 'Robot.buildCount()', not 'myBot.buildCount()'";
    }
}

const sparky = new Robot("Sparky");
sparky.sayHi();
// sparky.buildCount(); // ❌ This would ERROR!
console.log(`   8. Static: ${Robot.buildCount()}`);


/*
💡 FINAL SUMMARY & REVISION:
- Prototype: The hidden object where shared methods live (DNA).
- Classes: Beautiful "Syntactic Sugar" coat over prototypes.
- Creation Phase: JS sets up memory (Hoisting) BEFORE running code.
- Call Stack: The LIFO (Last-In-First-Out) pile of functions.
- Static Methods: Tools that live on the Class, not the individual objects.
- Microtasks (Promises) ALWAYS jump ahead of Macrotasks (Timers).
*/
