/**
 * MODULE 23: ITERATORS & GENERATORS 🔄
 * 
 * In standard JavaScript, we loop over arrays using 'for' loops. 
 * But what if we want to create our OWN rules for how to loop?
 */

// ---------------------------------------------------------
// 1. THE ITERATOR PROTOCOL (The Custom Bookmark)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
An Iterator is like a "Bookmark". 
Even if the book is 1,000 pages, the bookmark only cares about 
ONE thing: "What is the next page?"
*/

function createSimpleIterator(array) {
    let nextIndex = 0;
    
    // An iterator is just an object with a .next() method
    return {
        next: function() {
            if (nextIndex < array.length) {
                return { value: array[nextIndex++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const myItems = ["Apple", "Banana"];
const myIterator = createSimpleIterator(myItems);

console.log("--- SECTION 1: MANUAL ITERATORS ---");
console.log("1.1 First Call:", myIterator.next()); // { value: "Apple", done: false }
console.log("1.2 Second Call:", myIterator.next()); // { value: "Banana", done: false }
console.log("1.3 Final Call:", myIterator.next()); // { value: undefined, done: true }


// ---------------------------------------------------------
// 2. GENERATORS (The Pause Button) ⏸️
// ---------------------------------------------------------
/*
A Generator is a special type of function that can "Pause" 
in the middle. It uses the '*' symbol and the 'yield' keyword.
*/

function* numberGenerator() {
    console.log("   (Generator Started)");
    yield 10; // Pause and return 10
    
    console.log("   (Generator Resumed)");
    yield 20; // Pause and return 20
    
    console.log("   (Generator Finished)");
}

const gen = numberGenerator();

console.log("\n--- SECTION 2: GENERATORS ---");
console.log("2.1 Calling gen.next():", gen.next());
console.log("2.2 Calling gen.next():", gen.next());
console.log("2.3 Final Call:", gen.next());


// ---------------------------------------------------------
// 3. REAL WORLD: INFINITE SEQUENCES 🚀
// ---------------------------------------------------------
/*
Generators are amazing because they can represent "Infinite" 
things without crashing your computer (since they only 
calculate the NEXT item when you ask for it).
*/

function* idCreator() {
    let id = 1;
    while (true) {
        yield `USER_ID_${id++}`;
    }
}

const ids = idCreator();

console.log("\n--- SECTION 3: INFINITE IDS ---");
console.log("3.1 New ID:", ids.next().value);
console.log("3.2 New ID:", ids.next().value);
console.log("3.3 New ID:", ids.next().value);


// ---------------------------------------------------------
// 4. GENERATORS WITH LOOPS
// ---------------------------------------------------------
/*
Since Generators create Iterators, you can use 'for...of' 
directly on them!
*/

function* colorGen() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

console.log("\n--- SECTION 4: GENERATOR + FOR...OF ---");
for (const color of colorGen()) {
    console.log("Color picked:", color);
}


/*
💡 THE BIG PICTURE:
- Iterators: The underlying "law" of how to get the next value.
- Generators: The easy "syntax" to write custom iterators using 'yield'.
- Use Case: Handling massive datasets, streams of data, or custom "Step-by-Step" logic.
*/
