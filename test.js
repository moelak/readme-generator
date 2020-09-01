var inquirer = require('inquirer');

inquirer.registerPrompt('recursive', require('inquirer-recursive'));
inquirer
  .prompt([
    {
      type: 'recursive',
      message: 'Add a new user ?',
      name: 'users',
      prompts: [
        {
          name: 'installationTitle',
          message: 'Whats is the title of the Installation',
        },
        {
          name: 'installationCode',
          message: 'Whats is the Installation Code',
        },
      ],
    },
  ])
  .then(function (answers) {
    console.log(answers.users);
    console.log(answers.users[0].installationTitle);
    console.log(answers.users[0].installationCode);
  });
