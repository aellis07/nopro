const Employee = require("./employee.js");

class Engineer extends Employee {
  constructor(name, empID, email, role, github) {
    super(name, empID, email, role);
    this.github = github;
  }
  getGHub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
