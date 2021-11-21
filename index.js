const inquirer = require("inquirer");
const fs = require("fs");

const promptobj = [
    {
        // What is your name?
        type: "input",
        message: "What is a your name",
        name: "name",
    },

    {
        // What role do you have?
        type: "list",
        message: "What position do you work",
        choices: ["Manager", "Engineer", "Employee"],
        name: "role",
    },

    //
];

inquirer.prompt(promptobj).then((response) => {
    if (response.role == "Manager") {
        console.log("Manager role was selected");

        const managerresponse = [
            {
                type: "number",
                message: "What is a your office number?",
                name: "number",
            },
        ];

        inquirer.prompt(managerresponse).then(() => {
            const newEmployeePrompt = [
                {
                    type: "confirm",
                    message: "Would you like to add a new employee",
                    name: "newEmployee",
                },
            ];
        });
    }
    if (response.role == "Engineer") {
        console.log("Engineer role was selected");

        const engineerresponse = [
            {
                type: "input",
                message: "What is a your github?",
                name: "github",
            },
        ];

        inquirer.prompt(engineerresponse);
    }
    if (response.role == "Intern") {
        console.log("Intern role was selected");

        const internresponse = [
            {
                type: "input",
                message: "What school did you go to?",
                name: "number",
            },
        ];

        inquirer.prompt(internresponse);
    }

    // console.log(response);
});
