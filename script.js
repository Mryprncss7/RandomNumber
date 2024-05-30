document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const restartBtn = document.getElementById('restartBtn');
    const numberDisplay = document.getElementById('numberDisplay');
    let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const adminPassword = "admin123"; // Set a secure password

    generateBtn.addEventListener('click', () => {
        if (numbers.length === 0) {
            numberDisplay.textContent = 'All numbers have been generated!';
            generateBtn.disabled = true;
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers.splice(randomIndex, 1)[0];
        numberDisplay.textContent = `Generated Number: ${randomNumber}`;
    });

    restartBtn.addEventListener('click', () => {
        const enteredPassword = prompt("Enter admin password to restart the generator:");
        if (enteredPassword === adminPassword) {
            numbers = Array.from({ length: 100 }, (_, i) => i + 1);
            numberDisplay.textContent = 'Press the button to generate a number';
            generateBtn.disabled = false;
            alert("Generator has been restarted.");
        } else {
            alert("Incorrect password. Access denied.");
        }
    });
});