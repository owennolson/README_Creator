// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    var licenseOption = "";
    if (license === "GLP3.0") {
      licenseOption = `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)](https://www.gnu.org/licenses/gpl-3.0${license})`;
    } else {
      licenseOption = `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
    }
    return licenseOption;
  }
}
// if(license === )
//   [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[contribution](#contribution)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## License
  ${data.license}


  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions please contact me through my Email: ${
    data.email
  }. You can find more of my work at (https://api.github.com/users/${
    data.username
  })
`;
}

module.exports = generateMarkdown;
