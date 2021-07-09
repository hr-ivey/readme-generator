// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');

// TODO: Create a function to write README file
const generateTXT = (answers) =>
`# ${answers.project_title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}  
![Application Screencast](screencast.mp4)

## Credits
${answers.contributing}

## Tests
${answers.tests}

## Questions
[Find me on Github](https://github.com/${answers.username})  
[Email me](mailto:${answers.email})

---
## License
${answers.license}`;


// TODO: Create an array of questions for user input
inquirer
    .prompt ([
        {
            type: 'input',
            name: 'project_title',
            message: "What is the title of your project",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please enter a project description",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Please enter installation instructions",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Please enter usage information",
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Please enter names of other contributors",
        },
        {
            type: 'input',
            name: 'tests',
            message: "Please enter test instructions",
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license',
            choices: [
                'A', new inquirer.Separator(),
                'B', new inquirer.Separator(),
                'C',
            ],
        },
        {
            type: 'input',
            name: 'username',
            message: "Please enter your GitHub username",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your email address",
        },
])
.then((answers) => {
    let rmContent = generateTXT(answers);

    fs.writeFile('SAMPLE.MD', rmContent, (err) =>
    err ? console.log(err) : console.log("Successfully generated README file")
    );
});
