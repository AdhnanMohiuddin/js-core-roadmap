# 🚀 Core JavaScript Concepts: Zero to Hero

This repository is a structured learning path for mastering JavaScript, focusing purely on core language fundamentals, logic, and advanced execution models.

---

## 🚀 Getting Started

To get the most out of this roadmap, follow these steps to set up your environment:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/AdhnanMohiuddin/js-core-roadmap.git
    ```
2.  **Open in VS Code**: Open the folder in your favorite code editor.
3.  **Install "Live Server"**: Search for the **Live Server** extension in VS Code and install it. This allows you to see your changes in real-time.
4.  **Launch the Dashboard**: Right-click `index.html` and select **"Open with Live Server"**.
5.  **Open the Console**: Press `F12` or `Right Click > Inspect > Console` in your browser. All the logic and "Hero" secrets are logged there!

---

## 💡 How to Study (The Hero Way)

*   **Don't Just Read—Run!**: Use the Dashboard to load each module. Watch the console logs as they tell the story of the code.
*   **The "Dual-Screen" Method**: Keep the code open in VS Code on one side and the browser console on the other. See the code, then see the result.
*   **Break the Code**: After running a module, try changing the values in the `.js` files. In JavaScript, you learn the most by breaking things and fixing them.
*   **Complete the Exercises**: Every module has a matching file in the `exercises/` folder. Don't skip these! Solving problems is how you build "muscle memory".
### 🤖 Use AI as a Learning Partner (Not a Shortcut)

If you feel stuck, you can use tools like ChatGPT, Gemini, or Claude — but use them the *right way*.

👉 Don’t just ask for answers. Ask for **understanding**.

#### ✅ Good Prompt (Use This)

```
I am studying [Module Name] from this roadmap:
https://github.com/AdhnanMohiuddin/js-core-roadmap

Here is what I understood so far:
[Write 1–2 lines]

Here is where I am stuck:
[Paste your code or question]

Explain this in simple terms like I am a beginner, and give a small example.
```

#### ⚠️ Avoid This

* “Give me the answer”
* “Write the full code for me”

#### 🧠 Why This Matters

If you rely on AI for answers, you’ll get stuck later.
If you use AI to *learn*, you’ll become independent.

👉 Think of AI as a **mentor**, not a **shortcut**.


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
13. **[async-basics.js](./13.async-basics.js)** ✅ 
    - Callbacks, Event Loop fundamentals
14. **[promises.js](./14.promises.js)** ✅
    - Promise states, Chaining, `Promise.all`
15. **[async-await.js](./15.async-await.js)** ✅
    - Modern asynchronous patterns & Error handling (`try/catch`)

---

### 🔵 6. ADVANCED CORE & WEB APIs
16. **[json-and-fetch.js](./16.json-and-fetch.js)** ✅
    - JSON manipulation & Fetch API (Networking)
17. **[error-handling.js](./17.error-handling.js)** ✅
    - Custom Errors & Debugging techniques
18. **[modules.js](./18.modules.js)** ✅
    - ES Modules (`import/export`)
19. **[advanced-execution-&-Prototypes.js](./19.advanced-execution-&-Prototypes.js)** ✅ ⭐⭐⭐
    - Prototype Chain, Classes, Microtasks vs Macrotasks
20. **[dom-basics.html](./20.dom-basics.html)** ✅
    - Selectors, Events, and DOM manipulation
21. **[dom-advanced.html](./21.dom-advanced.html)** ✅
    - querySelectorAll, Scroll, and LocalStorage
22. **[recursion.js](./22.recursion.js)** ✅
    - Recursive patterns & Call Stack limits
23. **[iterators-generators.js](./23.iterators-generators.js)** ✅
    - Custom Iterators & Generator functions (`yield`)
24. **[modern-collections.js](./24.modern-collections.js)** ✅
    - Map, Set, and Object.freeze()

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
- [Async Basics Exercise](exercises/13.AsyncBasics_Exercise.md)
- [Promises Exercise](exercises/14.Promises_Exercise.md)
- [Async Await Exercise](exercises/15.AsyncAwait_Exercise.md)
- [JSON & Fetch Exercise](exercises/16.JsonFetch_Exercise.md)
- [Error Handling Exercise](exercises/17.ErrorHandling_Exercise.md)
- [Modules Exercise](exercises/18.Modules_Exercise.md)
- [Advanced Execution & Prototypes Exercise](exercises/19.AdvancedExecution_Exercise.md)
- [DOM Basics Exercise](exercises/20.DOM_Exercise.md)
- [DOM Advanced Exercise](exercises/21.DOMAdvanced_Exercise.md)
- [Recursion Exercise](exercises/22.Recursion_Exercise.md)
- [Iterators & Generators Exercise](exercises/23.IteratorsGenerators_Exercise.md)
- [Modern Collections Exercise](exercises/24.ModernCollections_Exercise.md)

---
*Focus on the core, and everything else will follow.* 🚀
