
// Toogle Menu Show and Hide

const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', function () {
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Show Alert 

const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', function () {
    alert("Hello! My name is Reyhern, this is an alert pop up! Thank you.");
});

// Increment - Decrement and Reset

const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const counterDisplay = document.getElementById('counter');
const resetButton = document.getElementById('resetButton');

let count = 0;

incrementButton.addEventListener('click', function () {
    count += 1;
    counterDisplay.textContent = count;
});

decrementButton.addEventListener('click', function () {
    count -= 1;
    counterDisplay.textContent = count;
});

resetButton.addEventListener('click', function() {
    location.reload();
});

// Form Validation using RegExp

const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

function isValidName(name) {
    const namePattern = /^[a-zA-z\s]+$/;
    return namePattern.test(name);
}

greetButton.addEventListener('click', function () {
    const username = usernameInput.value.trim();
    if (username === '') {
        greetingMessage.textContent = 'Please enter your name.';
    } else if (!isValidName(username)) {
        greetingMessage.textContent = 'Invalid input. Please use only letters.'
    } else {
        greetingMessage.textContent = `Hello, ${username}!`;
    }
});

// Adding Paragraph

const addParagraphBtn = document.getElementById('addParagraphBtn');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphBtn.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Congratulation!! You did it, Keep learning buddy.';
    paragraphContainer.appendChild(newParagraph);   
});