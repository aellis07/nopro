const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name, empID, email, github) {
        super(name, empID, email);
        this.github = github;
    }
    getGHub() {
        return this.github;
    }
    getPosition() {
        return "Engineer";
    }
}

module.exports = Engineer;
