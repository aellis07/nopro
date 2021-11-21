const Employee = require("../lib/employee");

describe("Employee Test", () => {
    test("Should return new Employee object", () => {
        const newemp = new Employee();

        expect(typeof newemp).toBe("object");
    });

    test("Should be able to pass parameters through constructor", () => {});
});
