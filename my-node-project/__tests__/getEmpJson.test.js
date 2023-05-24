//Redo the Exercises Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()) so that they access data from an external JSON file. Create tests that demonstrate the correct execution of the exercise by mocking the JSON file.

const { getEmployee, getSalary } = require('../app/getEmpJson'); // importando las funciones adaptadas para que lean la data del json

// Mock the file system module
jest.mock('fs', () => {
  const { readFile } = jest.requireActual('fs');
  return {
    ...jest.requireActual('fs'),
    readFile: (path, encoding, callback) => {
      // Mock the JSON data // es necesario hacer el mock del Json para verificar que funciona, atencion, no tiene formato Json sino esta en el formato normal de objeto
      const mockData = {
        employees: [
          {
            id: 1,
            name: 'Linux Torvalds',
          },
          {
            id: 2,
            name: 'Bill Gates',
          },
          {
            id: 3,
            name: 'Jeff Bezos',
          },
        ],
        salaries: [
          {
            id: 1,
            salary: 4000,
          },
          {
            id: 2,
            salary: 1000,
          },
          {
            id: 3,
            salary: 2000,
          },
        ],
      };
      
      // Simulate reading the JSON file, atencion al metodo JSON stringify
      const data = JSON.stringify(mockData);
      callback(null, data);
    },
  };
});

describe('getEmployee and getSalary functions', () => {
  it('should return the employee object with the provided ID', async () => {
    const employee = await getEmployee(2);
    expect(employee).toEqual({
      id: 2,
      name: 'Bill Gates',
    });
  });

  it('should return the salary of the provided employee', async () => {
    const employee = {
      id: 3,
      name: 'Jeff Bezos',
    };
    const salary = await getSalary(employee);
    expect(salary).toBe(2000);
  });

  it('should reject with an error message when the employee is not found', async () => {
    expect.assertions(1);
    try {
      await getEmployee(4);
    } catch (error) {
      expect(error).toBe('Employee not found');
    }
  });

  it('should reject with an error message when the salary is not found', async () => {
    expect.assertions(1);
    const employee = {
      id: 4,
      name: 'Kim Jong Un',
    };
    try {
      await getSalary(employee);
    } catch (error) {
      expect(error).toBe('Salary not found');
    }
  });
});
