const { getEmployee, getSalary } = require('../app/getemployee2');

describe(`This is the test for getEmployee()`,() =>{

    test('getEmployee: debe devolver el objeto empleado cuando el ID es válido', async () => {
        await expect(getEmployee(1)).resolves.toEqual({
            id: 1,
            name: 'Linux Torvalds'
        });
        });
    
    test.todo('getEmployee: si la id no existe debe imprimir un error'), async () => {
        await expect(getEmployee()).rejects.toThrowError('Esa id de empleado no existe');
    }
    

});

describe(`test de getSalary`,() =>{

    test('getSalary: should return the employee salary when the employee is valid', async () => {
        const employee = {
            id: 3,
            name: 'Jeff Bezos'
        }
        const salary = 2000;
        await expect(getSalary(employee)).resolves.toBe(salary);
    });
    
    test.todo('getSalary: si la id no existe debe imprimir un error'), async () => {
        await expect(getSalary()).rejects.toThrowError('no ha ingresado una id valida');
    }

});



