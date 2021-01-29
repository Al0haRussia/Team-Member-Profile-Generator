const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github, title) {
        super(name, id, email)
        this.github = github;
        this.title = title;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Engineer;