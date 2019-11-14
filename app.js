const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")

const teamMembers = [];

const createTeam = () => {
inquirer
.prompt ([ 
{  
    type: "input",
    name: "managerName",
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
])
.then(function(answers) {
    const manager = new Manager(answers.isManager, answers.managerName, answers.id, answers.email, answers.office, "Manager")
    teamMembers.push(manager);
    return console.log(teamMembers);
})

}

createTeam();

