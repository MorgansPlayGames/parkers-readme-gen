// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${data.badge}

1. [ Description ](#description)
2. [ Installation ](#installation-instructions)
3. [ Usage Information ](#usage-information)
4. [ Contribution Guidelines ](#contribution-guidelines)
5. [ Licence ](#licence)
6. [ Questions ](#questions?)

## Description:
    ${data.description}
  
### Installation Instructions
    ${data.installInstructions}
   
### Usage Information
    ${data.usageInformation}
  
### Contribution Guidelines
    ${data.contributionGuidelines}
  
### Licence 
    Copyright (c) 2020, ${data.GitHubUsername}
    All rights reserved.
    
    This source code is licensed under the ${data.licence}-style license found in the
    LICENSE file in the root directory of this source tree.
  
### Questions?
    GitHub Username: ${data.GitHubUsername}
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
