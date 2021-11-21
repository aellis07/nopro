const Employee = require("./employee.js");

class Intern extends Employee {
    constructor(name, empID, email, school) {
        super(name, empID, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getPosition() {
        return "Intern";
    }
}

module.exports = Intern;
