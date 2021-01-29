const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officenum, title) {
        super(name, id, email);
        this.officenum = officenum;
        this.title = title;
    }
    getOfficeNum() {
        return this.officenum;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Manager;