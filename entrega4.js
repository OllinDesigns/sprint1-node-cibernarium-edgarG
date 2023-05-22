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
          let salary = salaries.find((sal) => sal.id === id);
          if (salary) {
            employee.salary = salary.salary;
          }
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

  getEmployee(3)
  
  async function imprimirEmpleadoPorId(employeeId) {
    try {
      if (typeof employeeId !== 'number') {
            throw new TypeError('la ID del empleado debe ser un numero');
      }
      
      const employee = await getEmployee(employeeId);
      if (!employee) {
        throw new Error('Employee not found');
      }
      console.log('Nivell 1 - Exercici 1: Employee:', employee.name);
      
      const salary = await getSalary(employee);
      if (!salary) {
        throw new Error('no se encontro el salario');
      }
      console.log('Salary:', salary);
    } catch (error) {
      console.log('Error:', error.message);
    }
  }

  imprimirEmpleadoPorId(1);


// Nivell 1 - Exercici 2 Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function myAsyncFunction(mymessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = mymessage;
      if (message.length === 0) {
        reject(new Error(`empty message`));
      } else {
        resolve(message);
      }
    }, 2000);
  });
}

myAsyncFunction('Nivell 1 - Exercici 2: esto aparecera 2 segundos despues')
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });


// Nivell 2 - Exercici 1: Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
// Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function mathMaster(a, b, c) {
  const multiplier = (d) => {
    return new Promise((resolve, reject) => {
      if (isNaN(d)) {
        reject(new Error(`insert a number`));
      } else {
        setTimeout(() => {
          resolve(d * 2);
        }, 2000);
      }
    });
  };

  try {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error(`only numbers`);
    }

    const result1 = await multiplier(a);
    const result2 = await multiplier(b);
    const result3 = await multiplier(c);

    console.log(
      `Nivell 2 - Exercici 1, the result of the mathMaster function is ${
        result1 + result2 + result3
      }`
    );
  } catch (error) {
    console.error(error.message);
  }
}

mathMaster(22, 1.5, 33);



// Nivell 3 - Exercici 1 Força i captura tants errors com puguis dels nivells 1 i 2.

setTimeout(() => {
    imprimirEmpleadoPorId('t');
    imprimirEmpleadoPorId('dd');
    imprimirEmpleadoPorId('dw');
    imprimirEmpleadoPorId(true);
    mathMaster('t', false, 'yeah')
}, 7000)  

