class Manager {
    constructor(name, id, email, officenum, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenum = officenum;
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
    getOfficeNum() {
        return this.officenum;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Manager;