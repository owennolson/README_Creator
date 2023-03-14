// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown =  require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [    
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email adress?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Who worked on this project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Give a breif Description about your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the Installation Instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "How does the user use your project.",
    name: "usage",
  },

  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "BSD3", "GLP3.0", "none"],
  },
];
//I love Coding :)))))))
// TODO: Create a function to write README file
//  fs.appendFile("README.md", `${process.argv[0]}\n`, (err) =>
//      err ? console.error(err) : console.log('Commit logged!')
//  );


// TODO: Create a function to initialize app
function init(){
  inquirer.prompt(questions)
  .then((responses) => {
    console.log(generateMarkdown(responses));
    fs.writeFile("README.md", generateMarkdown(responses), (err) =>
    err ? console.error(err) : console.log('README Created!!')
    );
  })
}

// Function call to initialize app
init();

