var generateMar = require('./utils/generateMarkdown.js');
var inquirer = require('inquirer');
var fs = require('fs');

// array of questions for user
const questions = [
  {
    name: 'title',
    message: 'Whats is the title?',
    default: 'My project',
  },
  {
    name: 'description',
    message: 'Whats is the description?',
    default: 'Description...',
  },

  {
    name: 'usage',
    message: 'Insert the Usage:',
    default: 'The usage',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What is the name of the License?',
    choices: ['BSD', 'MIT', 'GPL'],
  },

  {
    name: 'contributing',
    message: 'Insert the Contributing:',
    default: 'Contributing...',
  },
  {
    name: 'tests',
    message: 'Insert the Tests:',
    default: 'insert the test...',
  },

  {
    name: 'questions',
    message: 'Insert the QUESTIONS:',
    default: 'QUESTIONS...',
  },

  {
    type: 'input',
    name: 'credit',
    message: 'Please include the Credits?',
    default: 'Credits...',
  },

  {
    name: 'firstItem',
    message: 'Please add the installation Item?',
    default: 'Installation items...',
  },

  {
    type: 'recursive',
    name: 'item',
    message: 'Do you wanna add more Item?',
    prompts: [
      {
        name: 'insertMoreItem',
        message: 'Whats is the new additional item? ',
      },
    ],
  },
];

// function to initialize and write README file

async function init() {
  try {
    inquirer.registerPrompt('recursive', require('inquirer-recursive'));
    const data = await inquirer.prompt(questions);

    fs.writeFile('README.md', generateMar.generate(data), err => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
