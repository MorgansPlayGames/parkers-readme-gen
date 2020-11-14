// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

## Description:
    ${data.description}
  
### Installation Instructions
    ${data.installInstructions}
   
### Usage Information
    ${data.usageInformation}
  
### Contribution Guidelines
    ${data.contributionGuidelines}
  
### Licence 
    ${data.licence}
  
### GitHub Username
    ${data.GitHubUsername}
  
### Questions?
    Email: ${data.email}
`;
}

module.exports = generateMarkdown;
