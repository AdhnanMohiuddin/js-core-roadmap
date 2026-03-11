/**
 * - Arrays are nothing but a collection of values
 * - when we want to store multiple values in a single variable then we * * use arrays to store them
 * 
 * - instead of creating multiple variables for multiple values we can create a single array to store them
 * 
 * - example:
 * let name1 = "John";
 * let name2 = "Jane";
 * let name3 = "Bob";
 * let name4 = "Alice";
 * let name5 = "Mike";
 * 
 * - instead of creating multiple variables for multiple values we can * * create a single array to store them
 * let names = ["John", "Jane", "Bob", "Alice", "Mike"];
 * 
 * 
 * - we can store different data types in an array
 * 
 * - we can store all the premitive data types and non premitive data 
 * types that we previously studied can be stored in an array
 * 
 * - lets create the array using premitive data types and non premitive 
 * data types 
 * 
 * - as of now we will also study built in methods of arrays
 * 
 */


  // primitive arrays example

   let numArr = [1,2,3,4,5];
   let strArr = ["John", "Jane", "Bob", "Alice", "Mike"];
   let boolArr = [true, false, true, false, true];
   let nullArr = [null, null, null, null, null];
   let undefinedArr = [undefined, undefined, undefined, undefined, undefined];
   let symbolArr = [Symbol("a"), Symbol("b"), Symbol("c"), Symbol("d"), Symbol("e")];
   let mixedArr = [1, "John", true, null, undefined, Symbol("a"), {name: "John"}, [1,2,3], function() {console.log("Hello")}, new Date(), /a/, new Map(), new Set()];

   console.log("nunArr: ",numArr);
   console.log("strArr: ",strArr);
   console.log("boolArr: ",boolArr);
   console.log("nullArr: ",nullArr);
   console.log("undefinedArr: ",undefinedArr);
   console.log("symbolArr: ",symbolArr);  
   console.log("mixedArr: ",mixedArr);


   // non primitive arrays example

   // there are multiple non primitive data types in javascript
   // i have given you some of the non primitive data types in the previous lessons
   // we can store all the non primitive data types in an array

   let objArr = [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}];
   let arrArr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], [13,14,15]];
   let funcArr = [function() {console.log("Hello")}];
   let dateArr = [new Date(), new Date(), new Date(), new Date(), new Date()];
   let regexArr = [/a/, /b/, /c/, /d/, /e/];
   let mapArry = [new Map(), new Map(), new Map(), new Map(), new Map()];
   let setArr = [new Set(), new Set(), new Set(), new Set(), new Set()];

   console.log("objArr: ",objArr);
   console.log("arrArr: ",arrArr);
   console.log("funcArr: ",funcArr);
   console.log("dateArr: ",dateArr);
   console.log("regexArr: ",regexArr);
   console.log("mapArry: ",mapArry);
   console.log("setArr: ",setArr);

   
   /*******************************************************/
 // there are many built-in array methods like:

 // length
 // push()
 // pop()
 // shift()
 // unshift()
 // splice()
 // slice()
 // concat()
 // join()
 // reverse()
 // sort()
 // forEach()
 // map()
 // filter()
 // reduce()
 // find()
 // findIndex()
 // some()
 // every()
 // includes()
 // indexOf()


 /* remember it is not necessary to remember all of the methods but it is good to have an idea of those 
  * but alteast have the understanding of above 5 methods and have breif understanding of others
  * ensure that you understand the working of each method
  * such that while solving problems you can use the appropriate method
  * it is not necessary to remember the syntax of each method
  * 
  * methods like map filter reduce are very important but we will go in depth later at the time of iteration but as of now have a breif idea of those methods
    /*******************************************************/

    console.log("Below are the built in methods for array");

    
 // now we will take two examples 
 // one for premitive array and one for non premitive array
 // and we will do the same operations on both of them
 // and we will see the difference between them

 // premitive array example

 let premitiveArr = [1,2,3,4,5];
 console.log("premitiveArr",premitiveArr);

 //length : returns the number of elements in an array

 console.log("length",premitiveArr.length);

 //output: 5

 //push() : adds an element to the end

 premitiveArr.push(6);
 console.log("push",premitiveArr);

 //output: [1,2,3,4,5,6]

 //pop() : removes an element from the end

 premitiveArr.pop();
 console.log("pop",premitiveArr);

 //output: [1,2,3,4,5]

 //shift() : removes an element from the beginning

 premitiveArr.shift();
 console.log("shift",premitiveArr);

 //output: [2,3,4,5]

 //unshift() : adds an element to the beginning

 premitiveArr.unshift(1);
 console.log("unshift",premitiveArr);


 /********************************************************************************************** */
 //reasigning the value of premitiveArr
 premitiveArr = [1,2,3,4,5];
 console.log("premitiveArr is reasigned",premitiveArr);

 /************************************************************************************************** */
 
 //splice() : removes or replaces or adds elements at a specific index

 premitiveArr.splice(0,2,10,11,12);

 //here 0 is the index at which we want to start
 //2 is the number of elements we want to remove
 //10,11,12 is the number of elements we want to add

 //so the syntax is splice(startIndex,deleteCount,item1,item2,item3,...)
 
 console.log("splice",premitiveArr);

 //output: [10,11,12,3,4,5]

 //slice() : returns a copy of a portion of an array

 let sliceArr = premitiveArr.slice(2,4);
 console.log("slice",sliceArr);

 //output: [12,3]

 //concat() : joins two or more arrays

 /************************************************************** */

 premitiveArr = [1,2,3,4,5];
 console.log("premitiveArr is reasigned",premitiveArr);

 /************************************************************** */

 let concatArr = premitiveArr.concat([12,13,14]);
 console.log("concat",concatArr);

 //output: [1,2,3,4,5,12,13,14]  

 //join() : joins all elements of an array into a string

 let joinStr = premitiveArr.join(" ");
 console.log("join",joinStr);


 //reverse() : reverses the order of elements in an array

 premitiveArr.reverse();
 console.log("reverse",premitiveArr);

 //output: [5,4,3,2,1]

 //sort() : sorts the elements of an array

 premitiveArr.sort();
 console.log("sort",premitiveArr);

 //output: [1,2,3,4,5]

 //forEach() : executes a function for each element in an array

 console.log("forEach");
 premitiveArr.forEach(function(element) {
    console.log(element);
 });

 //map() : creates a new array with the results of calling a function on every element in an array

 console.log("map");
 let mapArr = premitiveArr.map(function(element) {
    return element * 2;
 });
 console.log("map",mapArr);

 //output: [2,4,6,8,10]

 //filter() : creates a new array with all elements that pass the test implemented by the provided function

 console.log("filter");
 let filterArr = premitiveArr.filter(function(element) {
    return element > 2;
 });
 console.log("filter",filterArr);

 //output: [3,4,5]

 //reduce() : executes a reducer function (that you provide) on each element of the array, resulting in single output value

 console.log("reduce");
 let reduceVal = premitiveArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
 });
 console.log("reduce",reduceVal);

 //output: 15

 

 
 /************************************************************** */

 premitiveArr = [1,2,3,4,5];
 console.log("premitiveArr is reasigned",premitiveArr);

 /************************************************************** */

 //find() : returns the first element in the array that satisfies the provided testing function

 let findVal = premitiveArr.find(function(element) {
    return element > 2;
 });
 console.log("find",findVal);

 //output: 3

 //findIndex() : returns the index of the first element in the array that satisfies the provided testing function

 let findIndexVal = premitiveArr.findIndex(function(element) {
    return element > 2;
 });
 console.log("findIndex",findIndexVal);

 //output: 2

 //some() : tests whether at least one element in the array passes the test implemented by the provided function

 let someVal = premitiveArr.some(function(element) {
    return element > 2;
 });
 console.log("some",someVal);

 //output: true

 //every() : tests whether all elements in the array pass the test implemented by the provided function

 let everyVal = premitiveArr.every(function(element) {
    return element > 2;
 });
 console.log("every",everyVal);

 //output: false

 //includes() : determines whether an array includes a certain value among its entries

 let includesVal = premitiveArr.includes(2);
 console.log("includes",includesVal);

 //output: true

 //indexOf() : returns the first index at which a given element can be found in the array

 let indexOfVal = premitiveArr.indexOf(2);
 console.log(indexOfVal);  

 //output: 1

 

 // Arrays support many built-in methods. Although map(), filter(), and reduce() are widely used
 // for non premitive arrays most dev use map, filter and reduce to do the operations
 // we will study in deth about map, filter and reduce in the upcomming sessions
 
 // non premitive array examples


 // as of now this {name: "John"} is an object 
 // for now just understand that this is an object and it is based on key value pairs.
 // we will study in deth about objects in the upcomming sessions

 let nonPremitiveArr = [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}];
 console.log(nonPremitiveArr);

 // all of those methods will work on non premitive arrays too but with a little difference
 
 // here are the examples

 nonPremitiveArr.push({name: "Tom"});
 console.log("push",nonPremitiveArr);

 //output: [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}, {name: "Tom"}]

 nonPremitiveArr.pop();
 console.log("pop",nonPremitiveArr);

 //output: [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}]

 nonPremitiveArr.shift();
 console.log("shift",nonPremitiveArr);

 //output: [{name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}]

 nonPremitiveArr.unshift({name: "John"});
 console.log("unshift",nonPremitiveArr);

 //output: [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}]

 nonPremitiveArr.splice(0,2,{name: "John"});
 console.log("splice",nonPremitiveArr);

 //output: [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}]

 let NonPremitiveSliceArr = nonPremitiveArr.slice(2,4);
 console.log("slice",NonPremitiveSliceArr);

 //output: [{name: "Bob"}, {name: "Alice"}]

 let NonPremitiveConcatArr = nonPremitiveArr.concat({name: "John"});
 console.log("concat",NonPremitiveConcatArr);

 //output: [{name: "John"}, {name: "Jane"}, {name: "Bob"}, {name: "Alice"}, {name: "Mike"}, {name: "John"}]

 let NonPremitiveJoinStr = nonPremitiveArr.join(" ");
 console.log("join",NonPremitiveJoinStr);

 //output: "John Jane Bob Alice Mike"

 nonPremitiveArr.reverse();
 console.log("reverse",nonPremitiveArr);

 //output: [{name: "Mike"}, {name: "Alice"}, {name: "Bob"}, {name: "Jane"}, {name: "John"}]

 nonPremitiveArr.sort();
 console.log("sort",nonPremitiveArr);

 //output: [{name: "Alice"}, {name: "Bob"}, {name: "Jane"}, {name: "John"}, {name: "Mike"}]

 console.log("forEach");
 nonPremitiveArr.forEach(function(element) {
    console.log(element);
 });

 //output: 
 // {name: "Alice"}
 // {name: "Bob"}
 // {name: "Jane"}
 // {name: "John"}
 // {name: "Mike"}

 console.log("map");
 let NonPremitiveMapArr = nonPremitiveArr.map(function(element) {
    return element.name;
 });
 console.log("map",NonPremitiveMapArr);

 //output: ["Alice", "Bob", "Jane", "John", "Mike"]

 console.log("filter");
 let NonPremitiveFilterArr = nonPremitiveArr.filter(function(element) {
    return element.name === "John";
 });
 console.log("filter",NonPremitiveFilterArr);

 //output: [{name: "John"}]

 console.log("reduce");
 let NonPremitiveReduceVal = nonPremitiveArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.name;
 }, "");
 console.log("reduce",NonPremitiveReduceVal);

 //output: "AliceBobJaneJohnMike"

 console.log("find");
 let NonPremitiveFindVal = nonPremitiveArr.find(function(element) {
    return element.name === "John";
 });
 console.log("find",NonPremitiveFindVal);

 //output: {name: "John"}

 console.log("findIndex");
 let NonPremitiveFindIndexVal = nonPremitiveArr.findIndex(function(element) {
    return element.name === "John";
 });
 console.log("findIndex",NonPremitiveFindIndexVal);

 //output: 3

 console.log("some");
 let NonPremitiveSomeVal = nonPremitiveArr.some(function(element) {
    return element.name === "John";
 });
 console.log("some",NonPremitiveSomeVal);

 //output: true

 console.log("every");
 let NonPremitiveEveryVal = nonPremitiveArr.every(function(element) {
    return element.name === "John";
 });
 console.log("every",NonPremitiveEveryVal);

 //output: false

 console.log("includes");
 let NonPremitiveIncludesVal = nonPremitiveArr.includes({name: "John"});
 console.log("includes",NonPremitiveIncludesVal);

 //output: false

 console.log("indexOf");
 let NonPremitiveIndexOfVal = nonPremitiveArr.indexOf({name: "John"});
 console.log(NonPremitiveIndexOfVal);  

 //output: -1
