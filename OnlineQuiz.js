function redirectToPage2() {
    const nameToPass = document.getElementById("name").value;
    const url = `OnlineQuiz.html?variable=${encodeURIComponent(nameToPass)}`;
    window.location.href = url;
}

const questions = {
    "questions": [
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
            "question": "To access the first element of an array named numbers: \nlet firstElement = numbers[_]",
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
                "let variableName",
                "define variableName",
                "const variableName"
            ],
            "correctAnswer": ["var variableName", "let variableName", "const variableName"],
            "points": 3
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
        }, 
    ]
}