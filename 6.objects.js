/**
 * 🟡 OBJECTS IN JAVASCRIPT
 * 
 * Objects allow you to store multiple values in a single variable.
 * They are collections of 'key-value' pairs.
 * - Key: Also called a 'property' (always a string or symbol).
 * - Value: Can be any data type (string, number, array, even another object).
 */

// 1. OBJECT CREATION
// Instead of 5 separate variables, we group data into one object.
let person1 = {
    name: "Adhnan",
    age: 21,
    gender: "Male",
    city: "Hyderabad",
    country: "India"
};

console.log("Entire Object:", person1);
// Output: { name: 'Adhnan', age: 21, gender: 'Male', city: 'Hyderabad', country: 'India' }


// 2. ACCESSING PROPERTIES
// There are two ways to retrieve data from an object.

// A. Dot Notation (Most common)
console.log("Accessing with Dot Notation - Name:", person1.name); // Output: Adhnan

// B. Bracket Notation (Useful for dynamic keys or keys with spaces)
console.log("Accessing with Bracket Notation - Age:", person1["age"]); // Output: 21


// 3. UPDATING & ADDING PROPERTIES
// Objects are mutable (can be changed).

person1.name = "Adnan"; // Updating existing property
person1.github = "AdhnanMohiuddin"; // Adding a brand new property

console.log("Updated Object (Name changed & Github added):", person1);


// 4. DELETING PROPERTIES
delete person1.github;
console.log("After Deleting Github:", person1);


// 5. CHECKING IF A PROPERTY EXISTS
// A. Using the 'in' operator
console.log("Does 'name' exist in person1?", "name" in person1); // Output: true

// B. Using .hasOwnProperty() method
console.log("Does 'city' exist in person1?", person1.hasOwnProperty("city")); // Output: true


// 6. COMPLEX / NESTED OBJECTS
// Objects can contain Arrays, other Objects, and even Functions (Methods).

let person2 = {
    name: "Zaid",
    age: 21,
    hobbies: ["reading", "coding"], // Array inside object
    address: {                      // Object inside object
        street: "123 Main St",
        city: "Hyderabad",
        state: "Telangana"
    },
    greet: function () {             // Function inside object (Method)
        console.log("Greeting Method: Hello, my name is " + this.name);
    }
};

// Accessing nested data:
console.log("Nested Array (First Hobby):", person2.hobbies[0]); // Output: reading
console.log("Nested Object (Street Name):", person2.address.street); // Output: 123 Main St

// Calling a method:
person2.greet(); // Output: Greeting Method: Hello, my name is Zaid


// 7. OBJECT DESTRUCTURING
// A shortcut to extract values into variables.

// Instead of: let name = person2.name;
let { name, age, hobbies } = person2;

console.log("Destructured Name:", name); // Output: Zaid
console.log("Destructured Age:", age);   // Output: 21


// 8. USEFUL OBJECT METHODS
// These are built-in tools to handle objects like arrays.

console.log("Object Keys:", Object.keys(person1));
// Output: ["name", "age", "gender", "city", "country"]

console.log("Object Values:", Object.values(person1));
// Output: ["Adnan", 21, "Male", "Hyderabad", "India"]

console.log("Object Entries (Key-Value pairs):", Object.entries(person1));
// Output: [ ["name", "Adnan"], ["age", 21], ... ]


// 9. ADVANCED CREATION PATTERNS
// Useful when you need to create many objects of the same "type".

// A. Constructor Function (Old way, but still important)
function PersonConstructor(name, age) {
    this.name = name;
    this.age = age;
}
let person3 = new PersonConstructor("Saif", 23);
console.log("Created via Constructor:", person3);

// B. ES6 Classes (Modern way)
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let person4 = new PersonClass("Saif", 23);
console.log("Created via Class:", person4);

// 10. MODERN ES6 SHORTCUTS (Very important for React)

// A. Property Shorthand
// When the variable name matches the key name, you can skip the colon.
let username = "Adnan";
let userAge = 22;

let userShorthand = { username, userAge };
console.log("Property Shorthand:", userShorthand);
// Output: { username: "Adnan", userAge: 22 }


// B. Object Spread Operator (...)
// Used to copy or merge objects without changing the original.
let basicInfo = { brand: "Samsung", model: "S23" };
let details = { color: "Black", storage: "256GB" };

let fullProduct = { ...basicInfo, ...details, price: "$799" };
console.log("Merged Object using Spread:", fullProduct);


// C. Computed Property Names
// Allows you to use a variable as a key by wrapping it in [brackets].
let dynamicKey = "status";
let server = {
    id: 101,
    [dynamicKey]: "Online"
};
console.log("Computed Property Name:", server); // Output: { id: 101, status: "Online" }


/**
 * 💡 NOTE FOR BEGINNERS:
 * We often "iterate" (loop) through objects. 
 * Since .map() doesn't work directly on objects, we use 
 * Object.keys() or Object.entries() to turn them into arrays first.
 * We will cover this in depth in the 'Iteration' module!
 */