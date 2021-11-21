class Employee {
    constructor(name, empID, email) {
        this.name = name;
        this.empID = empID;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getID() {
        return this.empID;
    }
}
