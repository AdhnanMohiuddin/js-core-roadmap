//basically operators are used to perform operations on variables and values. They can be categorized into several types:

/*
 *   
 * 1. Arithmetic operators: These operators are used to perform mathematical operations. Examples include:
 *   - Addition (+): Adds two operands. Example: 5 + 3 (resolves to 8)
 *   - Multiplication (*): Multiplies two operands. Example: 5 * 3 (resolves to 15)
 *   - Subtraction (-): Subtracts the second operand from the first. Example: 5 - 3 (resolves to 2)
 *   - Modulus (%): Returns the remainder of the division of the first operand by the second. Example: 5 % 3 (resolves to 2)
 *   - Division (/): Divides the first operand by the second. Example: 5 / 3 (resolves to approximately 1.67)
 *
 * 2. Unary operators: These operators operate on a single operand. Examples include:
 *   - Decrement (--): Decreases an integer value by one. Example: let x = 5; x--; // x is now 4
 *   - Increment (++): Increases an integer value by one. Example: let x = 5; x++; // x is now 6/
 *   - typeof: Returns a string indicating the type of the operand. Example: typeof 5 (resolves to "number")
 *   - delete: Deletes a property from an object. Example: let obj = { name: "Alice" }; delete obj.name; // obj is now {}
 *   - void: Evaluates an expression and returns undefined. Example: void(0) (resolves to undefined)
 *   - Assignment (=): Assigns the value of the right operand to the left operand. Example: let x = 5; // x is now 5
 *
 * 3. Assignment operators: These operators are used to assign values to variables. Examples include:
 *   - Subtraction assignment (-=): Subtracts the right operand from the left operand and assigns the result to the left operand. Example: let x = 5; x -= 3; // x is now 2
 *   - Addition assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand. Example: let x = 5; x += 3; // x is now 8
 *   - Division assignment (/=): Divides the left operand by the right operand and assigns the result to the left operand. Example: let x = 5; x /= 3; // x is now approximately 1.67
 *   - Multiplication assignment (*=): Multiplies the left operand by the right operand and assigns the result to the left operand. Example: let x = 5; x *= 3; // x is now 15
 *   - Modulus assignment (%=): Returns the remainder of dividing the left operand by the right operand and assigns it to the left operand. Example: let x = 5; x %= 3; // x is now 2
 *   - Equal to (==): Returns true if the operands are equal. Example: 5 == "5" (resolves to true)
 *   - Comparison operators: These operators are used to compare two values and return a boolean result. Examples include:
 *   - Strict equal to (===): Returns true if the operands are equal and of the same type. Example: 5 === "5" (resolves to false)
 *   - Not equal to (!=): Returns true if the operands are not equal. Example: 5 != "5" (resolves to false)
 *   - Strict not equal to (!==): Returns true if the operands are not equal or not of the same type. Example: 5 !== "5" (resolves to true)
 *   - Greater than (>): Returns true if the left operand is greater than the right operand. Example: 5 > 3 (resolves to true)
 *   - Less than (<): Returns true if the left operand is less than the right operand. Example: 5 < 3 (resolves to false)
 *   -Greater than or equal to (>=): Returns true if the left operand is greater than or equal to the right operand. Example: 5 >= 5 (resolves to true)
 *   -Less than or equal to (<=): Returns true if the left operand is less than or equal to the right operand. Example: 5 <= 5 (resolves to true)
 *
 * 5. Logical operators: These operators are used to combine multiple boolean expressions and return a boolean result. Examples include:
 *   - Logical AND (&&): Returns true if both operands are true. Example: true && false (resolves to false)
 *   - Logical OR (||): Returns true if at least one of the operands is true. Example: true || false (resolves to true)
 *   - Logical NOT (!): Returns true if the operand is false. Example: !true (resolves to false)
 *
 * 6. Bitwise operators: These operators are used to perform bitwise operations on binary representations of numbers. Examples include:
 *   - Bitwise AND (&): Returns a 1 in each bit position where both operands have a 1. Example: 5 & 3 (resolves to 1)
 *   - Bitwise OR (|): Returns a 1 in each bit position where at least one operand has a 1. Example: 5 | 3 (resolves to 7)
 *   - Bitwise XOR (^): Returns a 1 in each bit position where only one operand has a 1. Example: 5 ^ 3 (resolves to 6)
 *   - Bitwise NOT (~): Inverts the bits of the operand. Example: ~5 (resolves to -6)
 *   - Left shift (<<): Shifts the bits of the first operand to the left by the number of positions specified by the second operand. Example: 5 << 1 (resolves to 10)
 *   - Right shift (>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Example: 5 >> 1 (resolves to 2)
 *
 * 7. Ternary operator: This operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. Example: let result = (5 > 3) ? "Greater" : "Smaller"; // result is "Greater"
 *
 * Understanding operators is essential for performing various operations in JavaScript, from simple arithmetic to complex logical expressions. They allow us to manipulate data and control the flow of our programs effectively.
 *
 *
 */


// Example of using different types of operators

 // Arithmetic operators
let a = 10;
let b = 5;
console.log("Addition (a + b):", a + b); // Output: 15
console.log("Subtraction (a - b):", a - b); // Output: 5  
console.log("Multiplication (a * b):", a * b); // Output: 50
console.log("Division (a / b):", a / b); // Output: 2
console.log("Modulus (a % b):", a % b); // Output: 0


// unary operators
let x = 5;
x++; // x is now 6
console.log("After Increment (x++):", x); // Output: 6
x--; // x is now 5
console.log("After Decrement (x--):", x); // Output: 5
console.log("Type of a:", typeof a); // Output: number
console.log("Type of 'Hello':", typeof "Hello"); // Output: string

let obj = { name : "Adhnan",
            age : 22,
            hobby : "coding",
            hasPet : true
          };
 console.log("Object BEFORE delete:", obj); // Output: { name: "Adhnan", age: 22, hobby: "coding" , hasPet: true }
delete obj.hasPet; // obj is now { name: "Adhnan", age: 22, hobby: "coding" }
console.log("Object AFTER delete:", obj); // Output: { name: "Adhnan", age: 22, hobby: "coding" }


// Assignment operators

// This assignment orerators are nothing but a shorthand/shortcut for performing an arithmetic operationand then assigning the result to the variable.
// For example, instead of writing x = x + 5, we can write x += 5. This makes our code more concise and easier to read.
let c = 10;
c += 5;
console.log("Addition Assignment (c += 5):", c); // Output: 15
c *= 2;
console.log("Multiplication Assignment (c *= 2):", c); // Output: 30
c /= 3;
console.log("Division Assignment (c /= 3):", c); // Output: 10
c -= 4;
console.log("Subtraction Assignment (c -= 4):", c); // Output: 6
c %= 4;
console.log("Modulus Assignment (c %= 4):", c); // Output: 2



// Comparison operators
console.log("Loose Equality (a == b):", a == b); // Output: false 
console.log("Strict Equality (a === b):", a === b); // Output: false
// the == operator loosly compares the value of a and b. it does not compare the type of the operands.
// for example console.log("Loose Equality Exampe (5 == '5'):", 5 == "5"); // Output: true
// but if we use the === operator, it will strictly compare the value and type of the operands.
// if we do console.log("Strict Equality Example (5 === '5'):", 5 === "5"); // Output: false as it also check's the type of the operands
console.log("Loose Not Equal (a != b):", a != b); // Output: true

// !== is the stricter version of !=. previously we saw that 5 != "5" is false because it only compares the value of the operands. 
// but if we use !==, it will compare both the value and type of the operands. 
// so 5 !== "5" is true because they are not of the same type.
console.log("Strict Not Equal (a !== b):", a !== b); // Output: true
console.log("Greater Than (a > b):", a > b); // Output: true
console.log("Less Than (a < b):", a < b); // Output: false
console.log("Greater or Equal (a >= b):", a >= b); // Output: true
console.log("Less or Equal (a <= b):", a <= b); // Output: false


// Logical operators

// && is a logical AND operator. it returns true if both operands are ture.
console.log("Logical AND (true && false):", true && false); // Output: false
// || is a logical OR operator. it returns true if at least one of the operands is true.
console.log("Logical OR (true || false):", true || false); // Output: true
// ! is a logical NOT operator. it returns true if the operand is false and false if the operand is true.
console.log("Logical NOT (!true):", !true); // Output: false
console.log("Logical NOT (!false):", !false); // Output: true


// Bitwise operators
console.log("Bitwise AND (5 & 3):", 5 & 3); // Output: 1
console.log("Bitwise OR (5 | 3):", 5 | 3); // Output: 7
console.log("Bitwise XOR (5 ^ 3):", 5 ^ 3); // Output: 6
console.log("Bitwise NOT (~5):", ~5); // Output: -6
console.log("Left Shift (5 << 1):", 5 << 1); // Output: 10
console.log("Right Shift (5 >> 1):", 5 >> 1); // Output: 2   

// the bitwise operators are used to perform bitwise operations on binary representations of numbers.
// they are not commonly used in everyday programming but can be useful in certain situations,
//  such as when working with low-level data or optimizing performance.
// this is not a must know topic for beginners, but it's good to have a basic understanding of them as you progress in your JavaScript journey.



// Ternary operator
let result_ternary = (a > b) ? "Greater" : "Smaller";
console.log("Ternary Operator (a > b):", result_ternary); // Output: Greater

// the ternary operator is a shorthand for an if-else statement.
//  it takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
// (condition) ? expressionIfTrue : expressionIfFalse; that's it !
// it is a concise way to write simple conditional statements and can make your code more readable in certain situations. 
// However, for more complex conditions, 
// it's often better to use if-else statements for clarity.

// we also have nested ternary operators, but they can make the code harder to read, so it's generally recommended to avoid them and use if-else statements instead for better readability.
// but if you want to see how they work, here is an example:

let age_user = 25;
let category = (age_user < 13) ? "Child" : (age_user < 20) ? "Teenager" : (age_user < 65) ? "Adult" : "Senior";
console.log("Nested Ternary (Category):", category); // Output: Adult

// just for understanding
let num =2000;

 //                 condition     if true                        if false then the  condition again      if True again                     if false condition     if true                              if false                            
let nestedTernary = (num < 10) ? "The number is less then 10 " : (num < 20)                          ? "the number is between 11 - 20 " : (num < 30 ) ?         "the number is between 21 - 30 " : "the number is greater then 30"

console.log("Deep Nested Ternary:", nestedTernary)