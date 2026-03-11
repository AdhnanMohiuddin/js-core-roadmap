/**
 * MODULE 10: THE 'this' KEYWORD
 * 
 * The 'this' keyword in JavaScript is one of the most confusing topics for beginners.
 * 
 * In simple terms: 'this' refers to the object that is currently executing the code.
 * However, the value of 'this' depends entirely on HOW a function is called, 
 * not where it is defined.
 */

// ---------------------------------------------------------
// 1. GLOBAL CONTEXT
// ---------------------------------------------------------
/*
When 'this' is used outside of any function or object, it refers to the 
Global Object.
- In Browsers: it is the 'window' object.
- In Node.js: it is the 'global' object.
*/

console.log("1. Global context:", this);
// Output (in browser): Window {...}


// ---------------------------------------------------------
// 2. METHOD CONTEXT (Implicit Binding)
// ---------------------------------------------------------
/*
When a function is called as a method of an object, 'this' refers to 
the object that owns the method.
*/

const person = {
    name: "Saif",
    greet() {
        console.log(`2. Method: Hello, my name is ${this.name}`);
    }
};

person.greet();
// Output: 2. Method: Hello, my name is Saif


// ---------------------------------------------------------
// 3. CONSTRUCTOR CONTEXT (The 'new' keyword)
// ---------------------------------------------------------
/*
When a function is used as a constructor (with the 'new' keyword), 
'this' refers to the newly created object.
*/

function User(username) {
    this.username = username;
    this.sayUser = function () {
        console.log("3. Constructor:", this.username);
    };
}

const user1 = new User("Adnan");
user1.sayUser();
// Output: 3. Constructor: Adnan


// ---------------------------------------------------------
// 4. EXPLICIT BINDING (call, apply, bind)
// ---------------------------------------------------------
/*
Sometimes we want to force 'this' to refer to a specific object. 
JavaScript gives us three methods to do this.
*/

const teacher = { name: "Omer" };
const student = { name: "Anas" };

function introduce(subject, level) {
    console.log(`4. ${this.name} teaches ${subject} at ${level} level.`);
}

// 4.1 .call() -> Invokes the function immediately. Arguments are passed individually.
introduce.call(teacher, "JavaScript", "Advanced");
// Output: Omer teaches JavaScript at Advanced level.

// 4.2 .apply() -> Invokes the function immediately. Arguments are passed as an ARRAY.
introduce.apply(student, ["HTML", "Beginner"]);
// Output: Anas teaches HTML at Beginner level.

// 4.3 .bind() -> Does NOT invoke immediately. It returns a NEW function with 'this' permanently bound.
const introduceAnas = introduce.bind(student, "CSS", "Intermediate");
introduceAnas();
// Output: Anas teaches CSS at Intermediate level.

/*
💡 PRO TIP: Call vs Apply vs Spread
- .call() = Pass arguments one by one:  (obj, arg1, arg2)
- .apply() = Pass arguments as an array: (obj, [arg1, arg2])

Modern JavaScript mostly uses the Spread operator (...) instead of .apply():
const args = ["JavaScript", "Advanced"];
introduce.call(teacher, ...args); // Modern way to do what .apply() does!
*/


// ---------------------------------------------------------
// 5. ARROW FUNCTIONS & 'this' (Lexical Binding)
// ---------------------------------------------------------
/*
Arrow functions DO NOT have their own 'this'. 
They inherit 'this' from their surrounding (lexical) scope.
*/

const group = {
    title: "Batch 2026",
    status: "Active",

    showStatus() {
        // A nested arrow function inherits 'this' from the showStatus method
        const innerFunc = () => {
            console.log(`5. Arrow Scope: This ${this.title} is ${this.status}`);
        };

        innerFunc();
    }
};

group.showStatus();
// Output: 5. Arrow Scope: This Batch 2026 is Active



// ---------------------------------------------------------
// 6. THE 'this' MYSTERY: THE CALLBACK PROBLEM
// ---------------------------------------------------------
/*
One common bug: When you pass a method as a callback, it "loses" its connection 
to the object because it's being called as a regular function.
*/

const car = {
    brand: "Tesla",
    start() {
        console.log("6. Callback Bug:", this.brand);
    }
};

// setTimeout(car.start, 1000); 
// Output (after 1s): undefined (because 'this' changed to global/window)

// FIX: Use .bind() or an Arrow Function
setTimeout(car.start.bind(car), 1000);
// Output: Tesla


/*
💡 FINAL SUMMARY FOR BEGINNERS:
1. Alone/Global: refers to Window/Global.
2. Method: refers to Owner Object.
3. Constructor (new): refers to New Instance.
4. Explicit (call/apply/bind): refers to whatever you chose.
5. Arrow: refers to surrounding scope (no own 'this').
*/
