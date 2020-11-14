
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
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
    console.log(data);
    let markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) =>
      err ? console.log(err) : console.log('Success!'));
    
}

// function to initialize program
function init() {
    
    //question asking module
    inquirer
    .prompt(questions)
    .then(answers => {
        // Put the data into a md file for a formatted readme
        let fileName = `${answers.title}.md`;
        writeToFile(fileName, answers);
    });
}

// function call to initialize program
init();
