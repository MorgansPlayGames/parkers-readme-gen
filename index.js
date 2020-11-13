
const inquirer = require('inquirer');
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project\'s name?'
    },
    {
        type: 'input',
        name: 'description',
        message: "Project Description: "
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: "How do I install: "
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'How do we use this program?'
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Contribution guidelines: '
    },
    {
        type: 'list',
        name: 'licence',
        message: 'what licence do you want? ',
        choices: ['none', 'MIT']
    },
    {
        type: 'input',
        name: 'GitHubUsername',
        message: 'GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Address: '
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    
    inquirer
    .prompt(
        /* Pass your questions in here */
        questions
    )
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers);
    });
}

// function call to initialize program
init();
