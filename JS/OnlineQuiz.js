function redirectToAnotherPage() {
    const nameField = document.getElementById('name');
    const errorMessage = document.getElementById('error-message');

    if (nameField.value.trim() === '') {
        errorMessage.textContent = 'Please enter your name.';
        return;
    }

    errorMessage.textContent = '';

    const nameToPass = encodeURIComponent(nameField.value.trim());
    const url = `OnlineQuiz.html?name=${encodeURIComponent(nameToPass)}`;
    window.location.href = url;
}

const questions = [
    {
        "id": 1,
        "question": "What is JavaScript?",
        "questionType": "MULTIPLE_CHOICE",
        "options": [
            "A markup language used to structure web pages",
            "A programming language used to add interactivity to web pages",
            "A stylesheet language used to style web pages",
            "A database management system"
        ],
        "correctAnswer": ["A programming language used to add interactivity to web pages"],
        "points": 1
    }, 
    {
        "id": 2,
        "question": "To access the first element of an array named numbers: \n\nlet firstElement = numbers[_]",
        "questionType": "TEXT",
        "options": [],
        "correctAnswer": "0",
        "points": 1
    }, 
    {
        "id": 3,
        "question": "What is the purpose of 'typeof' operator in JavaScript?",
        "questionType": "MULTIPLE_CHOICE",
        "options": [
            "To check the type of a variable",
            "To convert a variable to a string",
            "To declare a variable",
            "To create a new object"
        ],
        "correctAnswer": ["To check the type of a variable"],
        "points": 1
    }, 
    {
        "id": 4,
        "question": "Which of the following are valid ways to declare a variable in JavaScript? (Select all that apply)",
        "questionType": "CHECKBOXES",
        "options": [
            "var variableName",
            "string variableName",
            "define variableName",
            "const variableName"
        ],
        "correctAnswer": ["let variableName", "const variableName"],
        "points": 2
    }, 
    {
        "id": 5,
        "question": "Define a function named calculateSum that adds two numbers: \nfunction __________(a, b){\nreturn a + b",
        "questionType": "TEXT",
        "options": [],
        "correctAnswer": "calculateSum",
        "points": 1
    }, 
    {
        "id": 6,
        "question": "Which of the following are valid ways to create a function in JavaScript? (Select 2)",
        "questionType": "CHECKBOXES",
        "options": [
            "function myFunction() {}",
            "let myFunction = function() {}",
            "let myFunction = 123;",
            "var myFunction = Function.create();"
        ],
        "correctAnswer": ["function myFunction() {}", "let myFunction = function() {}"],
        "points": 2
    }, 
    {
        "id": 7,
        "question": "To check if a variable x is strictly not equal to 10:\n\nif (x ___ 10) {\n console.log(\"x is not 10\");\n}",
        "questionType": "TEXT",
        "options": [],
        "correctAnswer": "!==",
        "points": 1
    }
];

let currentQuestionIndex = 0;
const totalQuestions = questions.length;
let currentQuestion = null;

function loadQuestion() {
    if (currentQuestionIndex >= totalQuestions) {
        displayScore();
        return;
    }

    currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerHTML = currentQuestion.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'block';

    switch (currentQuestion.questionType) {
        case 'MULTIPLE_CHOICE':
            loadMultipleChoiceOptions();
            break;
        case 'CHECKBOXES':
            loadCheckboxOptions();
            break;
        case 'TEXT':
            loadTextInput();
            break;
    }
    fadeInOptions();
}

function loadMultipleChoiceOptions() {
    const optionsContainer = document.getElementById('options');
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-button';
        button.onclick = () => handleOptionSelect(option, button);
        optionsContainer.appendChild(button);
    });
}

function loadCheckboxOptions() {
    const optionsContainer = document.getElementById('options');
    const maxSelection = 2;

    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = option;
        checkbox.className = 'option-checkbox';

    checkbox.onclick = () => handleCheckboxLimit(maxSelection);
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
        label.appendChild(document.createElement('br'));
    });
}

function handleOptionSelect (selectedOption, button) {
    const isCorrect = currentQuestion.correctAnswer.includes(selectedOption);
    button.style.backgroundColor = isCorrect ? 'green' : 'red';
    button.style.color = 'white';

    disableOptions('.option-button');

    showCorrectAnswer();

    document.getElementById('next-button').style.display = 'block';
}

function disableOptions(selector) {
    document.querySelectorAll(selector).forEach(elem => elem.disabled = true);
}

function showCorrectAnswer() {
    document.querySelectorAll('.option-button').forEach(button => {
        const optionText = button.textContent;
        if (currentQuestion.correctAnswer.includes(optionText)) {
            button.style.backgroundColor = 'green'; 
            button.style.color = 'white'; 
        }
    });
}

function fadeInOptions() {
    const optionsContainer = document.getElementById('options');
}
loadQuestion();

