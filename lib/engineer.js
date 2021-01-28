class Engineer {
    constructor(name, id, email, github, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.title = title;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Engineer;