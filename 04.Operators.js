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
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5  
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0


// unary operators
let x = 5;
x++; // x is now 6
console.log(x); // Output: 6
x--; // x is now 5
console.log(x); // Output: 5
console.log(typeof a); // Output: number
console.log(typeof "Hello"); // Output: string

let obj = { name : "Adhnan",
            age : 22,
            hobby : "coding",
            hasPet : true
          };
 console.log(obj); // Output: { name: "Adhnan", age: 22, hobby: "coding" , hasPet: true }
delete obj.hasPet; // obj is now { name: "Adhnan", age: 22, hobby: "coding" }
console.log(obj); // Output: { name: "Adhnan", age: 22, hobby: "coding" }


// Assignment operators

// This assignment orerators are nothing but a shorthand/shortcut for performing an arithmetic operationand then assigning the result to the variable.
// For example, instead of writing x = x + 5, we can write x += 5. This makes our code more concise and easier to read.
let c = 10;
c += 5;
console.log(c); // Output: 15
c *= 2;
console.log(c); // Output: 30
c /= 3;
console.log(c); // Output: 10
c -= 4;
console.log(c); // Output: 6
c %= 4;
console.log(c); // Output: 2



// Comparison operators
console.log(a == b); // Output: false 
console.log(a === b); // Output: false
// the == operator loosly compares the value of a and b. it does not compare the type of the operands.
// for example console.log(5 == "5"); // Output: true
// but if we use the === operator, it will strictly compare the value and type of the operands.
// if we do console.log(5 === "5"); // Output: false as it also check's the type of the operands
console.log(a != b); // Output: true

// !== is the stricter version of !=. previously we saw that 5 != "5" is false because it only compares the value of the operands. 
// but if we use !==, it will compare both the value and type of the operands. 
// so 5 !== "5" is true because they are not of the same type.
console.log(a !== b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false


// Logical operators

// && is a logical AND operator. it returns true if both operands are ture.
console.log(true && false); // Output: false
// || is a logical OR operator. it returns true if at least one of the operands is true.
console.log(true || false); // Output: true
// ! is a logical NOT operator. it returns true if the operand is false and false if the operand is true.
console.log(!true); // Output: false
console.log(!false); // Output: true


// Bitwise operators
console.log(5 & 3); // Output: 1
console.log(5 | 3); // Output: 7
console.log(5 ^ 3); // Output: 6
console.log(~5); // Output: -6
console.log(5 << 1); // Output: 10
console.log(5 >> 1); // Output: 2   

// the bitwise operators are used to perform bitwise operations on binary representations of numbers.
// they are not commonly used in everyday programming but can be useful in certain situations,
//  such as when working with low-level data or optimizing performance.
// this is not a must know topic for beginners, but it's good to have a basic understanding of them as you progress in your JavaScript journey.



// Ternary operator
let result = (a > b) ? "Greater" : "Smaller";
console.log(result); // Output: Greater

// the ternary operator is a shorthand for an if-else statement.
//  it takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
// (condition) ? expressionIfTrue : expressionIfFalse; that's it !
// it is a concise way to write simple conditional statements and can make your code more readable in certain situations. 
// However, for more complex conditions, 
// it's often better to use if-else statements for clarity.

// we also have nested ternary operators, but they can make the code harder to read, so it's generally recommended to avoid them and use if-else statements instead for better readability.
// but if you want to see how they work, here is an example:

let age = 25;
let category = (age < 13) ? "Child" : (age < 20) ? "Teenager" : (age < 65) ? "Adult" : "Senior";
console.log(category); // Output: Adult

// just for understanding
let num =2000;

 //                 condition     if true                        if false then the  condition again      if True again                     if false condition     if true                              if false                            
let nestedTernary = (num < 10) ? "The number is less then 10 " : (num < 20)                          ? "the number is between 11 - 20 " : (test < 30 ) ?         "the number is between 21 - 30 " : "the number is greater then 30"

console.log(nestedTernary)