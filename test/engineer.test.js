const Engineer = require("../lib/engineer");

describe("Engineer Test", () => {
    test("Should be able to pass argument through subclass", () => {
        const githubb = "aellis07";
        const newemp = new Engineer("Anthony", 2, "fake@mail.com", githubb);

        expect(newemp.github).toBe(githubb);
    });
});
