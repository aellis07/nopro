const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];
const promptobj = [
  {
    // What is your name?
    type: "input",
    message: "What is a your name",
    name: "name",
  },
  {
    // What is your employee id?
    type: "input",
    message: "What is a your employee id?",
    name: "id",
  },
  {
    // What is your email?
    type: "input",
    message: "What is a your email?",
    name: "email",
  },
  {
    // What is your role?
    type: "list",
    message: "What is  your role",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
];
