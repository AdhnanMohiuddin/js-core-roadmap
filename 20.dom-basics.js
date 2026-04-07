/**
 * MODULE 20: DOM BASICS
 * The DOM is JavaScript's "Internal Map" of your HTML.
 */

// ---------------------------------------------------------
// 1. SELECTORS (Finding elements)
// ---------------------------------------------------------
const title = document.querySelector('#main-title');
const addBtn = document.querySelector('#add-btn');
const clearBtn = document.querySelector('#clear-btn');
const inputField = document.querySelector('#user-input');
const list = document.querySelector('#item-list');

// ---------------------------------------------------------
// 2. CLASSLIST (The Pro Way to style)
// ---------------------------------------------------------
// Instead of modifying '.style.color', we toggle CSS classes
title.addEventListener('mouseenter', () => {
    title.classList.add('highlight'); // Switch on
});
title.addEventListener('mouseleave', () => {
    title.classList.remove('highlight'); // Switch off
});

// ---------------------------------------------------------
// 3. ATTRIBUTES (Changing element properties)
// ---------------------------------------------------------
setTimeout(() => {
    inputField.setAttribute('placeholder', "Type something cool! 🚀");
}, 3000);

// ---------------------------------------------------------
// 4. TREE TRAVERSING & EVENT DELEGATION
// ---------------------------------------------------------
// Instead of adding an event to every single "X" button, we listen 
// to the PARENT (the list) and check what was clicked.
list.addEventListener('click', (event) => {
    // Check if the clicked target was a delete button
    if (event.target.classList.contains('delete-item')) {
        const liElement = event.target.parentElement; // Go up to the <li>
        liElement.remove(); // Delete it forever!
    }
});

// ---------------------------------------------------------
// 5. DYNAMIC CREATION (Building HTML with JS)
// ---------------------------------------------------------
addBtn.addEventListener('click', () => {
    const val = inputField.value.trim();
    if (!val) {
        alert("Please enter a note!");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${val}</span>
        <button class="delete-item">×</button>
    `;
    li.classList.add('success-border'); // Give it a green border
    
    list.appendChild(li); // Add it to the page
    inputField.value = ""; // Clear the input
});

// Fix: Adding functionality to the Clear Button
clearBtn.addEventListener('click', () => {
    list.innerHTML = ""; // Easy way to clear all child elements inside the list
});

/*
💡 HERO SUMMARY:
- Selection: document.querySelector is your multi-tool.
- classList: add(), remove(), toggle() are better than editing .style directly.
- Attributes: setAttribute() changes HTML behaviors or paths.
- Traversing: parentElement helps you move around the DOM tree.
- Deletion: .remove() is the simplest way to clean the UI.
*/
