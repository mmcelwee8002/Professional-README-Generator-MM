// TODO: Include packages needed for this application

const { writeFile, copyFile } = require('./utils/generateFile.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// const generateMarkdown = require('./utils/generateMarkdown.js');


// fs.writeFile('./utils/generateFile.js', pageHTML, err => {
//   if (err) throw err;

// TODO: Create an array of questions for user input
// const questions = [];
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your full name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username? (Required)',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitLink',
            message: 'Enter the GitHub link to your profile.:',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email for others to contact you: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your repository? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Please enter some information about your project: (Required)',
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter some information!')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Did you use any of the following licenses?',
            choices: ['MIT', 'Apache 2.0', 'Creative Commons 1.0', 'GPLv3', 'WTFPL']
        },
        {
            type: 'confirm',
            name: 'collaborator',
            message: 'Will your project have a collaborator?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please explain the usage of this project:',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Does your project need special instructions on how to install?',
            default: true
        },

        {
            type: 'input',
            name: 'install',
            message: 'Enter your installation instructions:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        }



    ])


        .then(data => {
            return generateMarkdown(data);
        })
        .then(Markdown => {
            return writeFile(Markdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })

        .catch(err => {
            console.log(err);
        })
}
function init() {
    promptQuestions()
}

init();
// promptQuestions().then(answers => console.log(answers));














// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
