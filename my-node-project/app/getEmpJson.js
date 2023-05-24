//Redo the Exercises Promises and Callbacks N2 E1 and Promises and Callbacks N2 E2 (getEmployee() and getSalary()) so that they access data from an external JSON file. Create tests that demonstrate the correct execution of the exercise by mocking the JSON file.

const fs = require('fs');

let employees;
let salaries;

// Read the JSON file and parse its content
fs.readFile('../getEmployee.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    // para que lea el archivo JSON
    const json = JSON.parse(data);
    employees = json.employees;
    salaries = json.salaries;

    getEmployee(3)
      .then((employee) => {
        console.log('Entrega 6 Exercici 1 nivel 3');
        console.log('Employee:', employee.name);
        console.log('Employee ID:', employee.id);
        return getSalary(employee);
      })
      .then((salary) => {
        console.log('Salary:', salary);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});

let getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let employee = employees.find((emp) => emp.id === id);
    if (employee) {
      resolve(employee);
    } else {
      reject('Employee not found');
    }
  });
};

let getSalary = (employee) => {
  return new Promise((resolve, reject) => {
    let salary = salaries.find((sal) => sal.id === employee.id);
    if (salary) {
      resolve(salary.salary);
    } else {
      reject('Salary not found');
    }
  });
};


module.exports = { getEmployee, getSalary };