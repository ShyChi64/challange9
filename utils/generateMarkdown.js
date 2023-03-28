// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") { 
    return `![badge](https://img.shield.io/badge/License-${license}-blue.svg)`
  } return ``; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') { 
    return `- [License](#license)`
  }
  return ``; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  iif (license !== 'None') { 
    return `## License 
    This application is covered by the ${license} license` 
  }
  return ``; 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ***

  # Description
  ${data.description}
- ${data.motivation}
- ${data.why} 
- ${data.problem}
- ${data.learned}

## Languages 
${data.languages}

## Instructions 
${data.instructions}

##Collaborators 
${data.collaborators} 

## Features
${data.features} 

## Deployed Link 
${data.deploy}

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
