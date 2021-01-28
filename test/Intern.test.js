const Intern = require('../lib/intern');

describe('Engineer', () => {
    it('Should take a name, id, email, school they went to, and title, and save it to a constructor', () => {
        const employee = new Intern('John', 6, 'email', 'school', 'title');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('email');
        expect(employee.school).toEqual('school');
        expect(employee.title).toEqual('title');
    });

    it('Functions should return specific parts of the constructor', () => {
        const employee = new Intern('Scarlet', 10, 'email', 'school', 'title');
        
        const nameEmployee = employee.getName();
        const idEmployee = employee.getId();
        const emailEmployee = employee.getEmail();
        const schoolEmployee = employee.getSchool();
        const roleEmployee = employee.getRole();

        expect(nameEmployee).toEqual('Scarlet');
        expect(idEmployee).toEqual(10);
        expect(emailEmployee).toEqual('email');
        expect(schoolEmployee).toEqual('school');
        expect(roleEmployee).toEqual('title');
    });
});