const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'Lets make a ReadME! What is the name of your project?'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Give a description of the project'
        },
        {
            type: 'input',
            name: 'projectLang',
            message: 'What languages do the project use?'
        },
        {
            type: 'input',
            name: 'projectContributers',
            message: 'Who worked on the project?'
        }
    ])
}

promptUser()