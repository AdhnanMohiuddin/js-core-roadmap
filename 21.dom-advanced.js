/**
 * MODULE 21: DOM ADVANCED
 */

// ---------------------------------------------------------
// 1. querySelectorAll (Working with Multiple Elements)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY:
querySelector -> Is like clicking specifically on ONE file on your desktop.
querySelectorAll -> Is like clicking and dragging a square to highlight MULTIPLE files!
*/
const highlightFirstBtn = document.getElementById('highlight-first-btn');
const highlightAllBtn = document.getElementById('highlight-all-btn');

// Example A: querySelector (Grabs ONLY the first one it finds)
if (highlightFirstBtn) {
    highlightFirstBtn.addEventListener('click', () => {
        // Notice it's tightly targeting '.target-box' just like querySelectorAll
        // But because we use `querySelector`, it stops immediately after finding Box 1!
        const firstBox = document.querySelector('.target-box');
        if (firstBox) {
            firstBox.style.background = "#ef4444"; // Paint it Red
            firstBox.style.color = "white";
            console.log("1a. querySelector grabbed ONLY the first box!");
        }
    });
}

// Example B: querySelectorAll (Grabs ALL into a NodeList)
if (highlightAllBtn) {
    highlightAllBtn.addEventListener('click', () => {
        // 1. Grab ALL the elements that have the '.target-box' class
        // This gives us a "NodeList" (A list that looks like an Array)
        const allBoxes = document.querySelectorAll('.target-box');
        
        // 2. IMPORTANT BEGINNER TRAP! 🛑
        // We CANNOT say: allBoxes.style.background = "blue"
        // Why? Because 'allBoxes' is a LIST, not a single box. 
        // We have to open the list and paint them one-by-one using a loop (.forEach).
        allBoxes.forEach((box, index) => {
            box.classList.toggle('highlight');
            console.log(`1b. Painting Box #${index + 1} blue!`);
        });
    });
}

// ---------------------------------------------------------
// 2. window.scrollTo & getBoundingClientRect (Smooth Scrolling)
// ---------------------------------------------------------
/*
LAYMAN ANALOGY (The Taxi):
Imagine calling a taxi. You need to give the exact GPS coordinates 
(BoundingClientRect) of the destination before the taxi can drive you 
there smoothly (scrollTo).
*/
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // 1. Find which section they want to go to using the Data Attribute! 
        // Example: targetId becomes "sec-1"
        const targetId = event.target.dataset.target;
        const targetSection = document.getElementById(targetId);
        
        // 2. Find exactly where that section is sitting on the page
        const rect = targetSection.getBoundingClientRect();

        // 3. Tell the window to scroll to that location
        window.scrollTo({
            // We use 'window.scrollY' to account for wherever the user currently is
            // -30 gives it a little breathing room from the top edge
            top: rect.top + window.scrollY - 30, 
            behavior: 'smooth'
        });
        
        console.log(`2. Smooth Scrolling to ${targetId} 🚕`);
    });
});

// ---------------------------------------------------------
// 3. LOCAL STORAGE (Saving Data in the Browser)
// ---------------------------------------------------------
const nameInput = document.getElementById('name-input');
const saveBtn = document.getElementById('save-btn');
const clearDataBtn = document.getElementById('clear-data-btn');

// When page loads, check if we already saved a name in the "Locker"
if (nameInput) {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        nameInput.value = savedName;
        console.log("3. Persistence: Found saved name from a previous session!");
    }

    saveBtn.addEventListener('click', () => {
        localStorage.setItem('username', nameInput.value); // Key, Value
        alert("3. Saved! Refresh the page to see the data persist.");
    });

    clearDataBtn.addEventListener('click', () => {
        localStorage.removeItem('username'); // Erase by key
        nameInput.value = "";
        alert("3. Data cleared!");
    });
}

// ---------------------------------------------------------
// 4. INTERSECTION OBSERVER (The Security Camera)
// ---------------------------------------------------------
// This is the fastest way to know if an element scrolled into view!
const glowBox = document.getElementById('glow-box');

if (glowBox) {
    // 4.1 Set up the camera details
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                glowBox.style.background = "#38bdf8"; // Light Blue
                console.log("4. Camera: Box is now visible!");
            } else {
                glowBox.style.background = "#334155"; // Dark Blue
            }
        });
    }, { threshold: 0.5 }); // Trigger only when 50% visible

    // 4.2 Start watching the box
    observer.observe(glowBox);
}

// ---------------------------------------------------------
// 5. DEBOUNCING (The Bouncer that prevents spam)
// ---------------------------------------------------------
/*
We wait for the user to STOP typing for 600ms before doing the heavy work.
If they type another letter, the timer resets!
*/
const debounceInput = document.getElementById('debounce-input');
let typingTimer;

if (debounceInput) {
    debounceInput.addEventListener('input', () => {
        clearTimeout(typingTimer); // Clear old timer (They haven't stopped writing yet!)
        console.log("5. Bouncer: Wait... they are still typing.");
        
        typingTimer = setTimeout(() => {
            // Executed only if 600ms pass WITHOUT a new keypress
            console.log("5. Bouncer: Okay, they stopped! Executing search for: " + debounceInput.value);
        }, 600);
    });
}

// ---------------------------------------------------------
// 6. DOCUMENT FRAGMENT (Performance Hack)
// ---------------------------------------------------------
const fragmentBtn = document.getElementById('fragment-btn');

if (fragmentBtn) {
    fragmentBtn.addEventListener('click', () => {
        // A "Ghost Box" that lives in memory, not on the page
        const fragment = document.createDocumentFragment(); 
        const fastList = document.getElementById('fast-list');
        
        // We build 10 items entirely in memory
        for (let i = 1; i <= 10; i++) {
            const li = document.createElement('li');
            li.innerText = `Fast Item #${i}`;
            li.className = "list-item";
            fragment.appendChild(li); 
        }
        
        // We attach the ghost box to the real page ONCE. (1 screen paint instead of 10)
        fastList.appendChild(fragment); 
        console.log("6. Performance: 10 items built and painted in 1 step.");
    });
}

// ---------------------------------------------------------
// 7. DATA ATTRIBUTES (Secret HTML Variables)
// ---------------------------------------------------------
/*
We can embed custom data in HTML using 'data-role' or 'data-id'.
JS reads this easily using the '.dataset' property!
*/
const secretBtns = document.querySelectorAll('.secret-btn');

secretBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        // Accessing the hidden data inside the HTML tag
        const role = event.target.dataset.role;
        const id = event.target.dataset.id;
        
        alert(`🕵️ Secret Data Accessed:\nRole = ${role}\nID = ${id}`);
        console.log(`7. Data Attributes: Clicked user ${id} with role ${role}.`);
    });
});

/*
💡 ADVANCED SUMMARY:
- querySelectorAll: Returns a NodeList (target specific classes to avoid grabbing everything).
- getBoundingClientRect(): Returns position/size relative to viewport.
- window.scrollTo({ behavior: 'smooth' }): Professional scrolling.
- localStorage: Simple state persistence across page refreshes.
- Intersection Observer: Watching when elements appear (great for performance!).
- Debounce: Waiting for a user to pause before acting (avoids spam).
- Fragment: Building multiple items in memory before painting them to the DOM.
- dataset: Reading custom 'data-*' attributes straight from HTML elements!
*/
