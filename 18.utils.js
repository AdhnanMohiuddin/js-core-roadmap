/**
 * MODULE 18 (Helper File): 18.utils.js
 * 
 * This file contains data and functions that we want to 
 * SHARE with the rest of our app.
 */

// ---------------------------------------------------------
// 1. NAMED EXPORTS (The specific items)
// ---------------------------------------------------------
/* 
Use these when you have MULTIPLE items to share. 
You must use the EXACT same name when you import them.
*/

export const appName = "Core JS Roadmap";
export const currentVersion = 1.0;

export function doubleValue(n) {
    return n * 2;
}


// ---------------------------------------------------------
// 2. DEFAULT EXPORT (The main theme)
// ---------------------------------------------------------
/* 
A file can only have ONE default export. 
This is usually the main function or object of that file. 
You can name this whatever you want when you import it!
*/

const config = {
    theme: "dark",
    apiKey: "SECRET_KEY_123"
};

export default config;
