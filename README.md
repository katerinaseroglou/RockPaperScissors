# Rock Paper Scissors (Prompt Version)

This is a simple **Rock Paper Scissors** game built with **HTML and JavaScript** without using the DOM for UI. Instead, the user input is collected via `window.prompt`, and the computer's choice is generated randomly by using `Math.random`.  

This project is a part of exercises from [The Odin Project](https://www.theodinproject.com/).

---

## Demo

- The user chooses "rock", "paper", or "scissors" via a prompt.  
- The computer makes a random choice with **equal probability** for rock, paper, or scissors.  
- The result (win, lose, or draw) is displayed on the page.

---

## Technologies

- HTML5
- JavaScript
- No interactive DOM elements for input (prompt used for user input, innerHTML used for output)

---

## Project Stracture

rock-paper-scissors/
│
├── index.html       ← HTML file
├── script.js        ← JavaScript containing all game logic
└── README.md        ← This file

---

## Notes

- This version uses prompt for user input and does not use buttons or interactive DOM elements.
- The same repository contains another branch with a version of the game that uses the DOM and buttons for a better UI.
- The purpose of this branch is to demonstrate the core game logic in JavaScript without advanced UI features.

