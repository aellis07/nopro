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
    message: "Enter employee's name: ",
    name: "name",
  },
  {
    // What is your employee id?
    type: "input",
    message: "Enter employee's id: ",
    name: "id",
  },
  {
    // What is your email?
    type: "input",
    message: "Enter employee's email: ",
    name: "email",
  },
  {
    // What is your role?
    type: "list",
    message: "Select employee's role: ",
    choices: ["Manager", "Engineer", "Intern"],
    name: "role",
  },
];

function mainPrompt() {
  // Pass main prompt object through inquire
  // Take the response and return employee specific prompt
  inquirer.prompt(promptobj).then((response) => {
    if (response.role == "Manager") {
      inquirer
        .prompt([
          {
            // What is your email?
            type: "input",
            message: "Enter employee's office number: ",
            name: "officenumber",
          },
          {
            type: "confirm",
            message: "Would you like to add a new employee",
            name: "newEmployee",
          },
        ])
        // Take general and specific employee info and create a unique employee
        .then((response2) => {
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.role,
            response2.officenumber
          );
          // Push this new employee into teamMembers array
          teamMembers.push(manager);

          // Checking if user wants to add additional employees
          // If true re run prompt
          if (response2.newEmployee == true) {
            mainPrompt();
          } else {
            // If false generate HTML
            generate("dist/index.html", teamMembers);
          }
        });
    }
    if (response.role == "Engineer") {
      inquirer
        .prompt([
          {
            // What is your github?
            type: "input",
            message: "Enter employee's github: ",
            name: "github",
          },
          {
            type: "confirm",
            message: "Would you like to add a new employee",
            name: "newEmployee",
          },
        ])
        .then((response2) => {
          const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.role,
            response2.github
          );
          teamMembers.push(engineer);

          if (response2.newEmployee == true) {
            mainPrompt();
          } else {
            // Generate HTML
            generate("dist/index.html", teamMembers);
          }
        });
    }
    if (response.role == "Intern") {
      inquirer
        .prompt([
          {
            // Wha
            type: "input",
            message: "Enter the interns secondary school:  ",
            name: "school",
          },
          {
            type: "confirm",
            message: "Would you like to add a new employee",
            name: "newEmployee",
          },
        ])
        .then((response2) => {
          const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.role,
            response2.school
          );
          teamMembers.push(intern);

          if (response2.newEmployee == true) {
            mainPrompt();
          } else {
            // Generate HTML
            generate("dist/index.html", teamMembers);
          }
        });
    }
  });
}
mainPrompt();
