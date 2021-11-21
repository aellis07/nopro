const Manager = require("../lib/manager");

describe("Engineer Test", () => {
    test("Should be able to pass argument through subclass", () => {
        // Jest gives an error of Legacy Octal literals not being supported
        // A quick work around is to pass the number in as string
        // const officenum = 0000000000;
        const officenum = "0000000000";
        const newemp = new Manager("Anthony", 5, "fake@mail.com", officenum);

        expect(newemp.number).toBe(officenum);
    });

    test("Should be able to retrive data from subclass", () => {
        const officenum = "0000000000";
        const newemp = new Manager("Anthony", 5, "fake@mail.com", officenum);

        expect(newemp.getOfficeNum()).toBe(officenum);
        expect(newemp.getPosition()).toBe("Manager");
    });
});
