const Manager = require('../lib/manager');

describe('Engineer', () => {
    it('Should take a name, id, email, office number, and title, and save it to a constructor', () => {
        const employee = new Manager('John', 6, 'email', 69420, 'title');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('email');
        expect(employee.officenum).toEqual(69420);
        expect(employee.title).toEqual('title');
    });

    it('Functions should return specific parts of the constructor', () => {
        const employee = new Manager('Scarlet', 10, 'email', 777, 'title');
        
        const nameEmployee = employee.getName();
        const idEmployee = employee.getId();
        const emailEmployee = employee.getEmail();
        const officenumEmployee = employee.getOfficeNum();
        const roleEmployee = employee.getRole();

        expect(nameEmployee).toEqual('Scarlet');
        expect(idEmployee).toEqual(10);
        expect(emailEmployee).toEqual('email');
        expect(officenumEmployee).toEqual(777);
        expect(roleEmployee).toEqual('title');
    });
});