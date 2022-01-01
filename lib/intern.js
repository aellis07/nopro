const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, empID, email, role, school) {
    super(name, empID, email, role);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
