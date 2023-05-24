let employees = [
    {
      id: 1,
      name: 'Linux Torvalds'
    },
    {
      id: 2,
      name: 'Bill Gates'
    },
    {
      id: 3,
      name: 'Jeff Bezos'
    }
  ];
  
  let salaries = [
    {
      id: 1,
      salary: 4000
    },
    {
      id: 2,
      salary: 1000
    },
    {
      id: 3,
      salary: 2000
    }
  ];
  
  let getEmployee = (id) => {
    return new Promise((resolve, reject) => {
      let employee = employees.find((emp) => emp.id === id);
      if (employee) {
        resolve(employee);
      } else {
        reject(new Error('Employee not found')); // Throw an Error object
      }
    });
  };
  
  let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
      let salary = salaries.find((sal) => sal.id === employee.id);
      if (salary) {
        resolve(salary.salary);
      } else {
        reject(new Error('Salary not found')); // Throw an Error object
      }
    });
  };
  
  getEmployee(3)
    .then((employee) => {
      console.log('Exercicis nivell 2');
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

   

  
  module.exports = { getEmployee, getSalary };
  