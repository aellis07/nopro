const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, empID, email, role, officeNum) {
    super(name, empID, email, role);
    this.number = officeNum;
  }
  getOfficeNum() {
    return this.number;
  }
  getPosition() {
    return "Manager";
  }
}

module.exports = Manager;
