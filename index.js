const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/generate-readme')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

const promptUser = () => {
    
    let readMeData = {
        projects: {
            projectName: '',
            projectDescription: '',
            projectLang: '',
            projectContributers: ''
        },
    }
    
    
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
    .then(answers => readMeData.projects = {
        projectName: answers.projectName,
        projectDescription: answers.projectDescription,
        projectLang: answers.projectLang,
        projectContributers: answers.projectContributers
    })
}

promptUser()
.then(readMeData => {
    return generateReadMe(readMeData)
})
.then(readMeFile => {
    return writeFile(readMeFile)
})