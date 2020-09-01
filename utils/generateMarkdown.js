function generateMarkdown(data) {
  let items = [];

  data.item.forEach(element => items.push(`\n * ${element.insertMoreItem}`));

  let newItems = items.join(' ');

  return `

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
---
* ${data.firstItem}
${newItems}

## Usage
---

${data.usage}

## Credits
---
${data.credit}

## License
---
#### License: ${data.license}

## Badges
---
[![Generic badge](https://img.shields.io/badge/${data.badges}-${data.badgeValue}%-<COLOR>.svg)](https://shields.io/)


## Contributing
---
${data.contributing}

## Tests
---

\`\`\`
${data.tests}
\`\`\`

## Questions
---
\`\`\`
${data.questions}
\`\`\`

  `;
}

module.exports = {
  generate: generateMarkdown,
};
