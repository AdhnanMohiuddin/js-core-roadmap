/**
 * MODULE 18: ES MODULES (import/export)
 * 
 * ES Modules are our way of building clean, organized projects.
 * Think of it as a "LEGO" set. We build small blocks and plug 
 * them in only when we need them.
 * 
 * In this module we will learn:
 * 1. Importing Named Exports (Specific parts)
 * 2. Importing Default Exports (The main part)
 * 3. Renaming Imports with 'as' (Avoiding conflict)
 * 4. Namespace Imports (Everything at once)
 */

// ---------------------------------------------------------
// 1. IMPORTING NAMED EXPORTS (Precise Selection)
// ---------------------------------------------------------
/*
Must be wrapped in curly braces { } and match the names 
used in the original file exactly.
*/

import { appName, doubleValue } from './18.utils.js';

console.log("1. Importing Named Exports:");
console.log(`   App Name: ${appName}`);
console.log(`   Doubling 5: ${doubleValue(5)}`);


// ---------------------------------------------------------
// 2. IMPORTING DEFAULT EXPORTS (Flexibility)
// ---------------------------------------------------------
/*
No curly braces needed! You can name this whatever you like.
*/

import myConfig from './18.utils.js'; // I'm naming it 'myConfig'

console.log("\n2. Importing Default Export:");
console.log(`   Theme: ${myConfig.theme}`);


// ---------------------------------------------------------
// 3. RENAMING WITH 'as' (Namespace Protection)
// ---------------------------------------------------------
/*
If two files have a function named 'fetchData', you can 
rename one of them to avoid a "Collision".
*/

import { currentVersion as version } from './18.utils.js';

console.log("\n3. Renaming with 'as':");
console.log(`   Version: ${version}`);


// ---------------------------------------------------------
// 4. NAMESPACE IMPORT (* as) (The Toolbox)
// ---------------------------------------------------------
/*
If you have MANY exports in a file, you can import them all 
into one single object.
*/

import * as Utils from './18.utils.js';

console.log("\n4. Namespace Import (*):");
console.log(`   All Utils:`, Utils);


// ---------------------------------------------------------
// 5. RE-EXPORTING (The Storefront Pattern)
// ---------------------------------------------------------
/*
In big projects, you might have 50 files. You can use 
one file to "Gather" all of them and re-export them.
(Imagine a single desk that gives you tools from 5 separate rooms).
*/

// export { appName } from './18.utils.js';


// ---------------------------------------------------------
// 6. DYNAMIC IMPORTS (The Performance Secret)
// ---------------------------------------------------------
/*
Wait! Why load everything at the start? 
Dynamic Imports let you load a file ONLY when you need it.
*/

async function loadSecretUtils() {
    console.log("\n6. Dynamic Import: Loading only when needed...");
    const { currentVersion } = await import('./18.utils.js');
    console.log(`   Loaded Version: ${currentVersion}`);
}

loadSecretUtils();


// ---------------------------------------------------------
// 7. THE "STRICT" SECRET
// ---------------------------------------------------------
/*
Every ES Module is automatically in "Strict Mode"! 
You don't need to type "use strict". 
Example: You CANNOT accidentally create global variables.
*/

try {
    // x = 10; // This would fail even without "use strict"!
} catch(e) {
    console.log("\n7. Modules are Strict: " + e.message);
}


/*
💡 FINAL SUMMARY & REVISION:
- export / import: Sharing code between files.
- Named exports: Use { name } - can have many.
- Default exports: No { } - can have only one.
- type="module": Required in your index.html script tag.
- Dynamic Import: Load code on-demand for better speed!
- Strict Mode: Always active inside modules.
*/
