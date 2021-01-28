const Employee = require('../lib/employee');

describe('Employee', () => {
    it('Should take a name, id, email, and title, and save it to a constructor', () => {
        const employee = new Employee('John', 6, 'email', 'title');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('email');
        expect(employee.title).toEqual('title');
    });

    it('Functions should return specific parts of the constructor', () => {
        const employee = new Employee('Scarlet', 10, 'email', 'title');
        
        const nameEmployee = employee.getName();
        const idEmployee = employee.getId();
        const emailEmployee = employee.getEmail();
        const roleEmployee = employee.getRole();

        expect(nameEmployee).toEqual('Scarlet');
        expect(idEmployee).toEqual(10);
        expect(emailEmployee).toEqual('email');
        expect(roleEmployee).toEqual('title');
    });
});