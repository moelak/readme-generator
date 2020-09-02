function generateMarkdown(data) {
  let items = [];

  data.item.forEach(element => items.push(`\n * ${element.insertMoreItem}`));

  let newItems = items.join(' ');

  let licenseLink = [];

  if (data.license === 'BSD') {
    licenseLink.push(
      'https://en.wikipedia.org/wiki/BSD_licenses#:~:text=BSD%20licenses%20are%20a%20family,and%20distribution%20of%20covered%20software.&text=The%20original%20BSD%20license%20was,a%20Unix%2Dlike%20operating%20system.'
    );
  } else if (data.license === 'MIT') {
    licenseLink.push('https://en.wikipedia.org/wiki/MIT_License');
  } else {
    licenseLink.push(
      'https://en.wikipedia.org/wiki/GNU_General_Public_License'
    );
  }

  return `

  [![Generic badge](https://img.shields.io/badge/License-${
    data.license
  }-<COLOR>.svg)](${licenseLink.toString()})
  
  # ${data.title}\n
  
  ### **Description:** ${data.description}\n

  ---

  # Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)
 * [Questions](#questions)
 
 ## Installation

* ${data.firstItem}
${newItems}

## Usage


${data.usage}

## Credits

${data.credit}

## License

#### License: ${data.license}


## Contributing

${data.contributing}

## Tests


\`\`\`
${data.tests}
\`\`\`

## Questions

\`\`\`
${data.questions}
\`\`\`

  `;
}

module.exports = {
  generate: generateMarkdown,
};
