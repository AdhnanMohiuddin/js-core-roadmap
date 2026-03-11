/**
 * MODULE 11: CLOSURES
 * 
 * Closures are often considered one of the most powerful features of JavaScript.
 * Simply put, a closure gives you access to an outer function's scope 
 * from an inner function.
 */

// ---------------------------------------------------------
// 1. LEXICAL SCOPE (The Foundation)
// ---------------------------------------------------------
/*
In JavaScript, a function can access variables defined in its own scope, 
and ALSO variables defined in its "parent" scope.
*/

function outer() {
    let outerVar = "I am from the outer world!";

    function inner() {
        // The inner function can see 'outerVar'
        console.log("1. Lexical Scope:", outerVar);
    }

    inner();
}

outer();
// Output: 1. Lexical Scope: I am from the outer world!


// ---------------------------------------------------------
// 2. WHAT IS A CLOSURE?
// ---------------------------------------------------------
/*
A closure is created when an inner function is "returned" from an 
outer function. 
Even after the outer function has finished executing, the inner function 
"remembers" the variables it was born with.
*/

function createGreeting(name) {
    return function () {
        console.log(`2. Closure: Hello, ${name}!`);
    };
}

// 'greetSaif' is now a function that "remembers" name = "Saif"
const greetSaif = createGreeting("Saif");
const greetAdnan = createGreeting("Adnan");

greetSaif();  // Output: Hello, Saif!
greetAdnan(); // Output: Hello, Adnan!


// ---------------------------------------------------------
// 2.1 FUNCTION FACTORIES
// ---------------------------------------------------------
/*
We can use closures to create "Function Factories"—functions that 
create and return customized versions of another function.
*/

function makeMultiplier(factor) {
    // The inner function "remembers" the 'factor' variable
    return function (number) {
        return number * factor;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log("2.1 Factory (Double):", double(5)); // 10
console.log("2.1 Factory (Triple):", triple(5)); // 15


// ---------------------------------------------------------
// 3. DATA PRIVACY (Private Variables)
// ---------------------------------------------------------
/*
One of the best uses of closures is to hide data. 
Since variables inside a function are not accessible from outside, 
we can use closures to create "Private" variables that can only be 
modified in safe ways.
*/

function createBankAccount(initialBalance) {
    let balance = initialBalance; // This is a PRIVATE variable

    return {
        deposit(amount) {
            balance += amount;
            console.log(`3. Deposit: $${amount}. New Balance: $${balance}`);
        },
        withdraw(amount) {
            if (amount > balance) {
                console.log("3. Error: Insufficient funds!");
                return;
            }
            balance -= amount;
            console.log(`3. Withdrawal: $${amount}. Remaining: $${balance}`);
        },
        getBalance() {
            return `3. Balance: $${balance}`;
        }
    };
}

const myAccount = createBankAccount(100);
myAccount.deposit(50);      // New Balance: $150
myAccount.withdraw(20);     // Remaining: $130
console.log(myAccount.getBalance());
myAccount.deposit(10);


// ---------------------------------------------------------
// 3.1 SHARED STATE IN MULTIPLE FUNCTIONS
// ---------------------------------------------------------
/*
In Section 3.2 of the Functions module, we learned that functions can 
return an object of tools. 

When mixed with CLOSURES, these tools all share the SAME private data!
If 'deposit' changes the balance, 'getBalance' will see the new value.
*/

// IMPORTANT: We cannot access 'balance' directly!
// console.log(myAccount.balance); // Output: undefined


// ---------------------------------------------------------
// 4. PRACTICAL EXAMPLE: THE COUNTER
// ---------------------------------------------------------
/*
A classic interview question: How do you create a function that 
remembers its own count?
*/

function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("4. Counter:", count);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // Output: 1
counter1(); // Output: 2
counter2(); // Output: 1 (Counter 2 has its own unique 'count' variable!)


// ---------------------------------------------------------
// 5. THE COMMON PITFALL: CLOSURES IN LOOPS
// ---------------------------------------------------------
/*
One of the most famous JavaScript bugs involves using 'var' inside a loop 
with a closure (like a timer). 

BECAUSE 'var' is not block-scoped, the closure remembers the FINAL value of 'i' 
after the loop is already finished.
*/

// THE BUG (Using 'var'):
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        // console.log("Pitfall (var):", i); 
    }, 1000);
}
// ❌ Output: 4, 4, 4 (Not 1, 2, 3!) 


// THE FIX (Using 'let'):
/* 
'let' is block-scoped, meaning it creates a NEW variable for every 
single loop iteration. The closure "locks in" the correct value.
*/
for (let j = 1; j <= 3; j++) {
    setTimeout(function () {
        console.log("5. Fix (let):", j);
    }, 1000);
}
// ✅ Output: 1, 2, 3


/*
💡 FINAL SUMMARY FOR BEGINNERS:
- Lexical Scope: Inner functions can see outer variables.
- Closure: An inner function that "remembers" its home (environment).
- Usefulness: Great for Data Privacy (hiding variables) and state management.
- Modern Note: Using 'let' in loops avoids the classic closure index bug.
*/

