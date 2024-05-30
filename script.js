// script.js

// Set to store generated numbers
let generatedNumbers = new Set();

// Admin password (in a real-world scenario, this should be handled more securely)
const adminPassword = 'admin123';

// Function to generate a random number
function generateRandomNumber() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
    } while (generatedNumbers.has(randomNumber));

    generatedNumbers.add(randomNumber);
    document.getElementById('random-number').textContent = randomNumber;
}

// Function to reset the generator with admin authentication
function resetGenerator() {
    const enteredPassword = prompt('Enter admin password:');
    if (enteredPassword === adminPassword) {
        generatedNumbers.clear();
        document.getElementById('random-number').textContent = '';
        alert('Random number generator has been reset!');
    } else {
        alert('Unauthorized access. Incorrect password.');
    }
}

// Generate a random number when the page loads
window.onload = generateRandomNumber;
