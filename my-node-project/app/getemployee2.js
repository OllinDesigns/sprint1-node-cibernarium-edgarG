// Nivell 1 - Exercici 1 Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}]; 

let getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        let employee = employees.find((emp) => emp.id === id);
        if (employee) {
          resolve(employee);
        // console.log(employee);
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



  getEmployee(3)
    .then((employee) => {
        console.log(`Exercicis nivell 2`)
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

    module.exports = {getEmployee, getSalary}