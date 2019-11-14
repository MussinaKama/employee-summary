const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")

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

const addManager = () => {
inquirer
.prompt(managerQuestions)
.then(function(answers) {
    if (answers.ismanager === "yes") {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office, "Manager");
        teamMembers.push(manager);
        return console.log(teamMembers);
    } else if (answers.ismanager === "no") {
        console.log("Sorry, you are not a manager")
    }
}).then(function(){
    createTeam();
})
}
addManager()


const createTeam = () => {
    inquirer
    .prompt([
        {
           type: "list",
           choices: ["engineer", "intern", "i don't want to add other member"],
           name: "question",
           message: "Would you like to add employees to your team ?"
        }
    ]).then(function(response) {
        if(response.question === "engineer") {
            addEngineer();
        } else if (response.question === "intern") {
            addIntern();
        } else {
            // console.log("You've done");
            return console.log(teamMembers)
        }
    })
}


const addEngineer = () => {
    inquirer
    .prompt(engineerQuestions)
    .then(function(answers) {
       const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, "Engineer",);
       teamMembers.push(engineer);
       return console.log(teamMembers);
    }).then(function(){
        createTeam()
    })
}

const addIntern = () => {
    inquirer
    .prompt(internQuestions)
    .then(function(answers){
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school, "Intern");
        teamMembers.push(intern);
        return console.log(teamMembers);
    }).then(function(){
        createTeam();
    })
}
