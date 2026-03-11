# 🚀 JavaScript Basics Practice Quiz & Exercises

This quiz is designed to help you reinforce the core concepts covered in the first 5 modules: Variables, Datatypes, Expressions & Literals, Operators, and Arrays.

---

## 📝 Section 1: Variables (`1.variables.js`)
**Goal:** Understanding declaration, scope, and mutability.

### Questions:
1. What is the main difference between `let` and `var` in terms of scope?
2. Which keyword should you use to declare a variable that should **never** be reassigned?
3. What will be the output of the following code?
   ```javascript
   const pi = 3.14;
   pi = 3.14159;
   console.log(pi);
   ```
4. Can you re-declare a variable using `let` in the same scope?

### Practice Exercise:
- Declare a variable named `myHobby` using `let` and assign it a string.
- Declare a constant named `birthYear` and assign it your year of birth.
- Try to change `myHobby` to a new string and log it.

---

## 🔢 Section 2: Datatypes (`2.datatypes.js`)
**Goal:** Identifying primitive and reference types.

### Questions:
1. What does `typeof null` return in JavaScript? (Hint: It's a famous quirk!)
2. Name the 6 primitive datatypes in JavaScript.
3. What is the difference between `undefined` and `null`?
4. How do you access the value `30` from this object?
   ```javascript
   let user = { name: "Alice", age: 30 };
   ```

### Practice Exercise:
- Create a variable for each primitive type (Number, String, Boolean, Null, Undefined).
- Use `console.log(typeof ...)` for each to verify their types.

---

## 💡 Section 3: Expressions & Literals (`3.Expressions-Literals-Operators.js`)
**Goal:** Understanding the building blocks of JS code.

### Questions:
1. Is `"Hello World"` a literal or an expression?
2. Is `5 + 10` a literal or an expression?
3. What is the result of the expression `"10" + 5`?

### Practice Exercise:
- Write an expression that calculates the number of seconds in an hour.
- Create a template literal string that uses a variable `name` to say `"Hello, [name]!"`.

---

## 🛠️ Section 4: Operators (`4.Operators.js`)
**Goal:** Mastering math, logic, and comparisons.

### Questions:
1. What is the difference between `==` and `===`?
2. What does the modulus operator `%` return?
3. What will be the value of `result`?
   ```javascript
   let score = 10;
   let result = (score > 5) ? "Pass" : "Fail";
   ```
4. What is the result of `true || false && false`? (Watch out for operator precedence!)

### Practice Exercise:
- Create two numbers, `num1` and `num2`.
- Use an assignment operator (like `+=`) to add `num2` to `num1`.
- Write a logical expression that checks if a number is both greater than 10 and even.

---

## 📚 Section 5: Arrays (`5.Arrays.js`)
**Goal:** Working with collections of data.

### Questions:
1. Which method adds an element to the **beginning** of an array?
2. Which method removes the **last** element of an array?
3. What does `[1, 2, 3].slice(0, 2)` return?
4. How do you find the index of the element `"Apple"` in `["Pear", "Apple", "Orange"]`?

### Practice Exercise:
- Create an array of 5 fruits.
- Add "Mango" to the end using `push`.
- Remove the first fruit using `shift`.
- Use `.map()` to create a new array where every fruit name is in uppercase.
- Use `.filter()` to find all fruits that have more than 5 letters.

---

## ⭐ Bonus Challenge (The "Final Boss" Question)
Predict the output of this code without running it:
```javascript
let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
fruits.unshift("Date");
let result = fruits.map(f => f.length).filter(len => len > 5);
console.log(result);
```

---
*Happy Coding! Practice makes perfect.* 🚀
