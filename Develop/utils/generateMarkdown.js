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
const generateContribute = contributeText => {
  if (!contributeText) {
    return ''
  } else {
    return `## Contributors 
    ${contributeText}
    `
  }
}





function generateMarkdown(data) {
  return `
    ![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
    # ${data.title}
    ## Description
    ${data.about}
    ## Table of Contents
    ${installCheck(data.install)}
    * [Usage](#usage)
    * [License](#license)
 
    
    ${generateInstall(data.install)}
    ## Usage
    ${data.usage}
    ## License
    * This application is covered under the ${data.license} license
    ${generateContribute(data.contribution)}
    ${generateTesting(data.testing)}
    ## Questions
    Created by: [${data.githubUsername}](${data.gitLink})
    
    If you have any further questions please feel free to contact me at [${data.email}](${data.email})
  `;
}

module.exports = generateMarkdown;
