const inquirer = require("inquirer");
const fs = require("fs");
// Calling Classes
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array to store employee information
const teamMembers = [];
// Main prompt
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

// Creating a code literal and passing the respective employee object into the function
const generateManager = function (manager) {
  return ` <div class="card">
        <div class="card-header" id="cardHeader">
          <h5 class="name">${manager.name}</h5>
          <h6 class="card-title">Manager</h6>
        </div>

        <div class="card-body">
          <p class="cardId">Employee ID: ${manager.empID}</p>
          <address>
            <p class="cardEmail">
              Email: 
              <a href="mailto:${manager.email}"> ${manager.email} </a>
            </p>
          </address>
          <p class="cardNumber">Office Number: ${manager.number}</p>
        </div>
        </div>`;
};

const generateEngineer = function (engineer) {
  return ` <div class="card">
          <div class="card-header" id="cardHeader">
            <h5 class="name">${engineer.name}</h5>
            <h6 class="card-title">Engineer</h6>
          </div>
  
          <div class="card-body">
            <p class="cardId">Employee ID: ${engineer.empID}</p>
            <address>
              <p class="cardEmail">
                Email: 
                <a href="mailto:${engineer.email}"> ${engineer.email}</a>
              </p>
            </address>
            <p class="cardGithub">Github: 
            <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </p>
          </div>
          </div>`;
};

const generateIntern = function (intern) {
  return ` <div class="card">
          <div class="card-header" id="cardHeader">
            <h5 class="name">${intern.name}</h5>
            <h6 class="card-title">Intern</h6>
          </div>
  
          <div class="card-body">
            <p class="cardId">Employee ID: ${intern.empID}</p>
            <address>
              <p class="cardEmail">
                Email: 
                <a href="mailto:${intern.email}"> ${intern.email} </a>
              </p>
            </address>
            <p class="cardSchool">School: ${intern.school}</p>
          </div>
          </div>`;
};

//
function generate(output, teamMembers) {
  newTeamArr = [];
  // Looping through teamMembers array
  for (let i = 0; i < teamMembers.length; i++) {
    const employee = teamMembers[i];
    const role = employee.getRole();

    // Sorting employess by role using the getRole method we created in the employee class
    if (role === "Manager") {
      // Taking manager info and pushing it into the generateManager code literal
      newTeamArr.push(generateManager(employee));
      console.log("Managers: ", employee);
    }
    if (role === "Engineer") {
      newTeamArr.push(generateEngineer(employee));
      console.log("Engineers: ", employee);
    }
    if (role === "Intern") {
      newTeamArr.push(generateIntern(employee));
      console.log("Intern: ", employee);
    }
  }
  // Takes newTeamArr and turns the code literal into a string
  teamHTML = newTeamArr.flat().join("");
  console.log("* * * * * *" + teamHTML + "* * * * * *");

  function render() {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200;400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid text-center" id="header">
          <div class="container">
            <h1>My Team</h1>
            <p>Employee Roster</p>
          </div>
        </div>
        <div class="container">
          <div class="row"> ${teamHTML}
          </div>
        </div>
      </body>
    </html>`;
  }

  // Writes file to file location given by output
  fs.writeFileSync(output, render(teamHTML), (err) => {
    if (err) throw err;
    console.log("file saved");
  });
}

// Start program
mainPrompt();
