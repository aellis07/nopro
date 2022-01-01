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
              Email: ${manager.email}
              <a href="mailto:${manager.email}"></a>
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
                Email: ${engineer.email}
                <a href="mailto:${engineer.email}">  </a>
              </p>
            </address>
            <p class="cardGithub">Github: ${engineer.github}</p>
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
                Email: ${intern.email}
                <a href="mailto:${intern.email}"> </a>
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
  teamHTML = arr.flat().join("");
  console.log("* * * * * *" + teamHTML + "* * * * * *");

  // fs.writeFileSync(filename, teamHTML, (err) => {
  //   if (err) throw err;
  //   console.log("file saved");
  // });
}

mainPrompt();
