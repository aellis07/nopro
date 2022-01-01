class Employee {
  constructor(name, empID, email, role) {
    this.name = name;
    this.empID = empID;
    this.role = role;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.empID;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Employee;
