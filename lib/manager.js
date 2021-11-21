const Employee = require("./employee.js");

class Manager extends Employee {
    constructor(name, empID, email, officeNum) {
        super(name, empID, email);
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
