// script.js

// Set to store generated numbers
let generatedNumbers = new Set();

// Function to generate a random number
function generateRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
    } while (generatedNumbers.has(randomNumber));

    generatedNumbers.add(randomNumber);
    document.getElementById('random-number').textContent = randomNumber;
}

// Function to reset the generator
function resetGenerator() {
    generatedNumbers.clear();
    document.getElementById('random-number').textContent = '';
    alert('Random number generator has been reset!');
}

// Generate a random number when the page loads
window.onload = generateRandomNumber;
