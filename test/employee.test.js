const Employee = require("../lib/employee");

describe("Employee Test", () => {
    test("Should return objects", () => {
        const newemp = new Employee();

        expect(typeof newemp).toBe("object");
    });
});
