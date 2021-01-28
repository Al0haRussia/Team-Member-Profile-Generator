class Intern {
    constructor(name, id, email, school, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Intern;