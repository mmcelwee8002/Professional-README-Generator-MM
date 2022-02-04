// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateInstall = installText => {
  if (!installText) {
    return ''
  } else {
    return `## Installation
    ${installText}
    `
  }
}
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributors 
    ${contributeText}
    `
  }
}
const generateTesting = testsText => {
  if (!testsText) {
    return ''
  } else {
    return `## Testing
    ${testsText}
    `
  }
}


const installCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Installation](#installation)`
  }
}
const contributeCheck = check => {
  if (!check) {
    return '';
  } else {
    return `* [Contributions](#contributions)`
  }
}

//create the markup for the license badge
const licenseBadge = (license) => {
  if (license !== 'None') {
    let badge = ''
    switch (license) {
      case 'MIT': badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
      case 'GNU GPLv3': badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        break;
      case 'Mozilla Public 2.0': badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break;
      case 'The Unlicense': badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
        break;
      case 'Apache 2.0': badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
      default: badge = ''
    }
    return badge
  } else {
    return ''
  }
}
const licenseText = (license) => {
  if (license !== 'None') {
    return `
## License
Licensed under the ${license} license.`
  } else {
    return `
## License
${noInfo}`
  }
}




function generateMarkdown(data) {
  return `
# ${data.title}

## Discription:
    ${data.about}

${licenseBadge(data.license)}



## Table of Contents
* [Installation instructions ](#Installation-instructions)
* [Usage instructions ](#Usage-instructions)
* [Contributing to this project ](#Contributing-to-this-project)
* [Credits](#Credits)
* [License](#License)
* [Testing Instructions](#Testing-Instructions)
* [Questions](#Questions)

    ## GitHub
    https://img.shields.io/github/license/${data.githubUsername}/${data.title}

### Contributer
${data.name}
  
## Tests
 ${data.tests}
 

## Install
${data.install}


## Usage
${data.usage}

## License
* This application is covered under the ${data.license} license
    
    ### Screenshot 
    ![Readme](images/Readme-Screenshot.png)

    ## Demo
    ![Demo] (Readme-Demo.mp4)


    ${generateContribute(data.contribution)}
    ${generateTesting(data.testing)}
    ## Created by: [${data.name}](${data.gitLink})
    
    If you have any further questions please feel free to contact me at [${data.name}](${data.email})
  `;
}

module.exports = generateMarkdown;
