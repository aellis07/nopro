const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, empID, email, github) {
        super(name, empID, email);
        this.github = github;
    }
}
