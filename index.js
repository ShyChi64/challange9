// TODO: Include packages needed for this application
var inquirer = require('inquirer'); 
const generateMarkdown = require('./utils.generateMarkdown'); 
var fs = require('fs'); 



// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
    name: 'why',
    message: 'Why did you build this project?', 
    }, 

    { 
        type: 'input', 
        name: 'motivation', 
        message: 'What was your motivation?', 

    }, 

    {
        type: 'input', 
        name: 'instructions', 
        message: 'Provide instructions of application, include examples.', 

    }, 

    {
        type: 'checkbox', 
        name: 'languages', 
        message: 'What languages were used to make this application?', 
        choices: ["HTML", "CSS", "Javascript", "Node.js"], 

    }, 

    { 
        type: 'input', 
        name: 'problem', 
        message: 'What problem did this project solve?', 
    }, 

    { 
      type: 'input', 
      name: 'description', 
      message: 'Please describe this project and what it does.', 
    }, 

    { 
        type: 'input', 
        name: 'installation', 
        message: 'Please provide instructions on how to install your project.', 
    }, 
    

   { type: 'list', 
    name: 'license',
    message: 'Choose your license for your project', 
    choices: [
        {value: 'Apache'}, 
        {value: 'LGPL'},
        {value: 'MPL'},
        {value: 'MIT'},
        {value: 'BSD3'},
        {value: 'None'},
    ]
}, 
{ 
    type: 'input', 
    name: 'features', 
    message: 'List the features of your project here.', 

},

{
    type: 'input', 
    name: 'deploy', 
    message: 'Where is your application delployed at?'

}, 

{ 
    type: 'input', 
    name: 'collaborators', 
    message: 'List any collaborators here, with links to their Github accounts.'
}, 

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err): console.log("success!"));  
}


// TODO: Create a function to initialize app
const init = async () => { 
    try { 
        const info = await inquirer.prompt(questions); 
        writeToFile("./userREADME.md", generateMarkdown(info)); 
    } catch (error) { 
        console.log(error); 
    }

}


// Function call to initialize app
init();
module.exports=questions; 