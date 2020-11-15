
//required node modules
const inquirer = require('inquirer');
const fs = require('fs');
//markdown generator that creates the text within the md
const generateMarkdown = require('./utils/generateMarkdown');
//array of badges to go in top of readme
const badgeArray = {
    'None':'',
    'MIT':'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache':'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
    'GPL-3.0':'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
}
    

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
        choices: ['None', 'MIT', 'Apache', 'GPL-3.0']
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
    data.badge = badgeArray[data.licence];
    //make the text to go into the readme
    let markdown = generateMarkdown(data);
    //create readme file
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
