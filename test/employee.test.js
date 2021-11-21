const Employee = require("../lib/employee");

describe("Employee Test", () => {
    test("Should return new Employee object", () => {
        const newemp = new Employee();

        expect(typeof newemp).toBe("object");
    });

    test("Should be able to pass parameters through constructor", () => {
        const newemp = new Employee("Anthony", 2, "fake@mail.com");

        expect(newemp.name).toBe("Anthony");
        expect(newemp.empID).toBe(2);
        expect(newemp.email).toBe("fake@mail.com");
    });

    test("Should be able to get values from object", () => {});
});
