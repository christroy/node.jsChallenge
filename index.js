const inq= require("inquirer");
const choices= require("./choices");
const fs=require("fs");

inq.prompt([
    {
        name:"project_title",
        type:"input",
        message:"What is your project title?"

    },
    {
        name:"description",
        type:"input",
        message:"What is your project description?"

    },
    {
        name:"installation_instructions",
        type:"input",
        message:"What are your installation instructions?"

    },
    {
        name:"usage_info",
        type:"input",
        message:"What is your project usage information?"

    },
    {
        name:"contribution_guidlines",
        type:"input",
        message:"What are your contribution guidlines?"

    },
    {
        name:"test_instructions",
        type:"input",
        message:"What are your test instructions?"

    },
    {
        name:"license",
        type:"list",
        message:"What is your project license?",
        choices: choices.choices,

    },
    {
        name:"git_username",
        type:"input",
        message:"What is your github username?"

    },
    {
        name:"email_address",
        type:"input",
        message:"What is your email address?"

    },
    
]).then(answers =>{
    
    generateREADME(answers);

});

function generateREADME(answers){
    console.log(answers);
    let body=`# ${answers.project_title}
<h2 style="background:#f2f2f2; padding: 5px; color:rgb(45,136,255);">${answers.license}</h2>

### Table of Contents
- [Description](#description)
- [Installation instructions](#installation-instructions)
- [Usage](#usage)
- [Contribution Guidlines](#contribution-guidlines)
- [Tests](#tests)
- [Questions](#questions)

---

## Description

${answers.description}

---

## Installation Instructions

${answers.installation_instructions}

---

## Usage

${answers.usage_info}

---

## Contribution Guidlines

${answers.contribution_guidlines}

---

## Tests

${answers.test_instructions}

---

## Questions

If you have any questions regarding this project, please email me at ${answers.email_address}

Here is a link to my github profile <a href="https://github.com/${answers.git_username}">Click Here</a>
    `;

    fs.writeFile("testREADME.md", body, function(err){
        if (err) throw err;
        console.log("saved");
    });
}