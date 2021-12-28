const inquirer = require('inquirer');
const generateReadme = require('generate-readme');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Lets make a ReadME! What is the name of your project?'
        }
    ])
}

promptUser()