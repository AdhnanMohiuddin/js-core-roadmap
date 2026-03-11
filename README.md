# 🚀 Core JavaScript Concepts: Zero to Hero

This repository is a structured learning path for mastering JavaScript, focusing purely on core language fundamentals, logic, and advanced execution models.

---

## 🗺️ Core JS Roadmap

### 🟢 1. BASIC FOUNDATIONS
1. **[variables.js](./01.variables.js)** ✅
   - `var` vs `let` vs `const`
   - Scope (Global, Function, Block)
   - Hoisting & Temporal Dead Zone (TDZ)
   - Conventions & Variable Names
   - Static vs Dynamic Typing

2. **[datatypes.js](./02.datatypes.js)** ✅
   - Primitive vs Reference types
   - `typeof` operator
   - `null` vs `undefined`, `NaN`
   - `Symbol` & `BigInt`
   - **Type Conversion:** Implicit (Coercion) vs Explicit

3. **[expressions-literals-operators.js](./03.Expressions-Literals-Operators.js)** ✅
   - Expressions vs Statements
   - Literals & Template Literals
   - Operator Precedence

4. **[operators.js](./04.Operators.js)** ✅
   - Arithmetic, Assignment, and Comparison (`==` vs `===`)
   - Logical Operators (`&&`, `||`, `!`)
   - Ternary Operator

---

### 🟢 2. DATA STRUCTURES LAYER
5. **[arrays.js](./05.Arrays.js)** ✅
   - Indexing, Mutation (`push/pop`) vs Non-mutation (`slice`)
   - Nested Arrays & Arrays of Objects
6. **[objects.js](./06.objects.js)** ✅
   - Dot vs Bracket notation
   - Nested Objects & Methods (`this` keyword intro)
   - **Modern Shortcuts:** Destructuring, Spread (`...`), Shorthand, Computed keys

---

### 🟢 3. CONTROL FLOW & ITERATION
7. **[control-flow.js](./07.control-flow.js)** ✅
   - `if...else`, `switch` and Ternary statements
   - Guard Clauses & Truthy/Falsy logic
   - **Modern Logic:** Short-Circuiting, Nullish Coalescing (`??`), Optional Chaining (`?.`)
8. **[iteration-patterns.js](./08.iteration-patterns.js)** ✅ ⭐
   - **Manual Loops:** `for`, `while`, `do while`
   - **Collection Loops:** `for...of`, `for...in`
   - **Object Iteration:** `Object.keys`, `Object.values`, `Object.entries`
   - *(Functional Iteration moved to Module 12)*

---

### 🟢 4. FUNCTIONS & SCOPE (High Level)
9. **[functions.js](./09.functions.js)** ✅
   - Declaration vs Expression
   - Arrow Functions & Lexical `this`
   - Parameters (Default, Rest)
10. **[this-keyword.js](./10.this-keyword.js)** ✅ ⭐
    - Contextual `this`, `call`, `apply`, `bind`
11. **[closures.js](./11.closures.js)** ✅ ⭐⭐
    - Lexical Scope, Closures, Private state
12. **[functional-iteration.js](./12.functional-iteration.js)** ✅ ⭐
    - **Functional Iteration:** `forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`
    - Callbacks & Higher-Order Functions (HOFs)

---

### ⚪ 5. ASYNCHRONOUS JAVASCRIPT
13. **13.async-basics.js**
    - Callbacks, Event Loop fundamentals
14. **14.promises.js**
    - Promise states, Chaining, `Promise.all`
15. **15.async-await.js**
    - Modern asynchronous patterns & Error handling (`try/catch`)

---

### 🔵 6. ADVANCED CORE & WEB APIs
16. **16.json-and-fetch.js**
    - JSON manipulation & Fetch API (Networking)
17. **17.error-handling.js**
    - Custom Errors & Debugging techniques
18. **18.modules.js**
    - ES Modules (`import/export`)
19. **19.advanced-execution.js** ⭐⭐⭐
    - Prototype Chain, Classes, Microtasks vs Macrotasks
20. **[dom-basics.js](./20.dom-basics.js)**
    - Selectors, Events, and DOM manipulation
21. **21.recursion.js**
    - Recursive patterns & Call Stack limits
22. **22.iterators-generators.js**
    - Custom Iterators & Generator functions (`yield`)

---

## 🏋️ Practice Exercises
Check the `exercises/` folder for module-specific quizzes:
- [Variables Exercise](exercises/01.Variables_Exercise.md)
- [Datatypes Exercise](exercises/02.Datatypes_Exercise.md)
- [Expressions Exercise](exercises/03.Expressions_Exercise.md)
- [Operators Exercise](exercises/04.Operators_Exercise.md)
- [Arrays Exercise](exercises/05.Arrays_Exercise.md)
- [Objects Exercise](exercises/06.Objects_Exercise.md)
- [Control Flow Exercise](exercises/07.ControlFlow_Exercise.md)
- [Iteration Exercise](exercises/08.Iteration_Exercise.md)
- [Functions Exercise](exercises/09.Functions_Exercise.md)
- [This Keyword Exercise](exercises/10.ThisKeyword_Exercise.md)
- [Closures Exercise](exercises/11.Closures_Exercise.md)
- [Higher Order Functions Exercise](exercises/12.FunctionalIteration_Exercise.md)

---
*Focus on the core, and everything else will follow.* 🚀
