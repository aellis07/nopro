const Employee = require("../lib/employee");

describe("Employee Test", () => {
  test("Should return new Employee object", () => {
    const newemp = new Employee();

    expect(typeof newemp).toBe("object");
  });

  test("Should be able to pass parameters through constructor", () => {
    const name = "Anthony";
    const newemp = new Employee(name);
    expect(newemp.name).toBe(name);
  });

  test("Should be able to get values from object", () => {
    const newemp = new Employee("Anthony", "Manager", 2, "fake@mail.com");

    expect(newemp.getName()).toBe(newemp.name);
    expect(newemp.getRole()).toBe(newemp.role);
    expect(newemp.getID()).toBe(newemp.empID);
    expect(newemp.getEmail()).toBe(newemp.email);
  });
});
