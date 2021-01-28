const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('Should take a name, id, email, github link, and title, and save it to a constructor', () => {
        const employee = new Engineer('John', 6, 'email', 'github', 'title');

        expect(employee.name).toEqual('John');
        expect(employee.id).toEqual(6);
        expect(employee.email).toEqual('email');
        expect(employee.github).toEqual('github');
        expect(employee.title).toEqual('title');
    });

    it('Functions should return specific parts of the constructor', () => {
        const employee = new Engineer('Scarlet', 10, 'email', 'github', 'title');
        
        const nameEmployee = employee.getName();
        const idEmployee = employee.getId();
        const emailEmployee = employee.getEmail();
        const githubEmployee = employee.getGithub();
        const roleEmployee = employee.getRole();

        expect(nameEmployee).toEqual('Scarlet');
        expect(idEmployee).toEqual(10);
        expect(emailEmployee).toEqual('email');
        expect(githubEmployee).toEqual('github');
        expect(roleEmployee).toEqual('title');
    });
});