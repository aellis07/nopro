const Intern = require("../lib/intern");

describe("Intern Test", () => {
  test("Should be able to pass argument through subclass", () => {
    const school = "Columbia";
    const newemp = new Intern("Anthony", "Intern", 1, "fake@mail.com", school);

    expect(newemp.school).toBe(school);
  });

  test("Should be able to retrive data from subclass", () => {
    const school = "Columbia";
    const newemp = new Intern("Anthony", "Intern", 1, "fake@mail.com", school);

    expect(newemp.getSchool()).toBe(school);
    expect(newemp.getRole()).toBe("Intern");
  });
});
