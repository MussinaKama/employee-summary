const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")
const writeFileAsync = util.promisify(fs.writeFile)

const teamMembers = [];

const managerQuestions = [
    {
        type: "list",
        name: "ismanager",
        choices: ["yes", "no"],
        message: "Are you manager ?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your name ?"
    },
    {
        type: "input",
        name: "office",
        message: "What is your office number ?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address ?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number ?"
    }
]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name ?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address ?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number ?"
    },
    {
        type: "input",
        name: "school",
        message: "What school are you going to (graduated) ?"
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name ?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address ?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID number ?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username ?"
    }
]

 const addManager =  () => {
    return inquirer
        .prompt(managerQuestions)
        .then(function (answers) {
            if (answers.ismanager === "yes") {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office, "Manager");
                teamMembers.push(manager);
                return console.log(teamMembers);
            } else {
                console.log("Sorry, you are not a manager")
            }
        }).then(function () {
            createTeam();
        })
}
addManager()

const createTeam =  () => {
    return inquirer
    .prompt([
        {
            type: "list",
            choices: ["engineer", "intern", "i don't want to add other member"],
            name: "question",
            message: "Would you like to add employees to your team ?"
        }
    ]).then(function (response) {
        if (response.question === "engineer") {
            addEngineer();
            } else if (response.question === "intern") {
                addIntern();
            } else {
                // console.log("You've done");
                return console.log(teamMembers)
            }
        })
}

const addEngineer =  () => {
   return inquirer
    .prompt(engineerQuestions)
        .then(function (answers) {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, "Engineer");
            teamMembers.push(engineer);
            return console.log(teamMembers);
        })
        .then(function () {
            createTeam()
        })
        
}

const addIntern =  () => {
    return  inquirer
        .prompt(internQuestions)
        .then(function (answers) {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern");
            teamMembers.push(intern);
            return console.log(teamMembers);
        })
        .then(function () {
            createTeam();
        })
        
}

function generateEngineer() {
 
    for (const i = 0; i < teamMembers.length; i++) {
        if (teamMembers.Engineer[i].title === "Engineer") {
            let engineerName = teamMembers.Engineer[i].name;
            let engineerId = teamMembers.Engineer[i].id;
            let engineerEmail = teamMembers.Engineer[i].email;
            let engineerGithub = teamMembers.Engineer[i].github;
            return `
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <title>Employee Summary</title>
          </head>
          <style>
          .card {
              display: inline-block;
          }
          </style>
          <div class="card">
          <img src="images/girl.png" alt="Avatar" style="width:100%">
          <div class="container">
          <h4>${engineerName}</h4> 
          <p>Role: ${title}</p> 
          <p>Email: ${engineerEmail}</p> 
          <p>ID: ${engineerId}</p> 
          <p>ID: ${engineerGithub}</p>  
          </div>
          </div>`
        }
    }
}

function generateManager () {
    for (const i = 0; i < teamMembers.length; i++) {
        if (teamMembers.Manager[i].title === "Manager") {
            let managerName = teamMembers.Manager[i].name;
            let managerId = teamMembers.Manager[i].id;
            let managerEmail = teamMembers.Manager[i].email;
            let managerOffice = teamMembers.Manager[i].office;
            return `
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <title>Employee Summary</title>
          </head>
          <style>
          .card {
              display: inline-block;
          }
          </style>
          <div class="card">
          <img src="images/manager.jpg" alt="Avatar" style="width:100%">
          <div class="container">
          <h4>${managerName}</h4> 
          <p>Role: ${title}</p> 
          <p>Email: ${managerEmail}</p> 
          <p>ID: ${managerId}</p> 
          <p>ID: ${managerOffice}</p>  
          </div>
          </div>`
        }
    }
}


function generateIntern () {
    for (const i = 0; i < teamMembers.length; i++) {
        if (teamMembers.Intern[i].title === "Intern") {
            let internName = teamMembers.Intern[i].name;
            let internId = teamMembers.Intern[i].id;
            let internEmail = teamMembers.Intern[i].email;;
            let internSchool = teamMembers.Intern[i].school;
            return `
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
            <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
            <title>Employee Summary</title>
          </head>
          <style>
          .card {
              display: inline-block;
          }
          </style>
          <div class="card">
    <img src="images/engineer_lady.jpg" alt="Avatar" style="width:100%">
    <div class="container">
    <h4>${internName}</h4> 
    <p>Role: ${title}</p> 
    <p>Email: ${internEmail}</p> 
    <p>ID: ${internId}</p> 
    <p>Github: ${internSchool}</p>  
    </div>
    </div>`
    }
    }
}


// generateIntern()

// addManager()
// .then (function(){
//     generateManager()
//     return writeFileAsync("engineer.html", function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//           });
//         })

// runPrompt()

// async function init() {
//    try {
//     //       const answers = await promptUser();
//     const htmlManager = await generateManager();

//    const htmlEngineer = await generateEngineer();
//    const htmlIntern =  await generateIntern();

//    fs.writeFile("manager.html", htmlManager, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
//    fs.writeFile("engineer.html", htmlEngineer, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   })
//    fs.writeFile("intern.html", htmlIntern, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   })
// }
//   catch { (function(err) {
//     console.log(err);
//   })
// }

// }

// //init()