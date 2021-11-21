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
    }

    // console.log(response);
});
