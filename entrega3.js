// Entrega 1.3: Promises & Callbacks (Edgar Garcia Santos)

// Nivell 1 - Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

// mirar ejercicio2 del nivel 1

const bookedConcert = false; // cambia el valor boolenao para ver los mensajes de las funciones resolve() o reject()
const concert1 = new Promise((resolve, reject) => {
    if(!bookedConcert) {
        const concertDetails = {
            name: 'Hell on Earth',
            location: 'Electric Ballroom',
            time: '11 p.m.'
        }
        resolve(concertDetails);
    } else {
        reject(new Error(`Para que aparezca este reject la constante bookedConcert tiene que tener un valor booleano falso`))
    }
});

// esta es la promise

concert1
    .then( res => {
        console.log(` 
Nivell 1 - Exercici 1: Concert sucessfully booked!`);
        console.log(res);
    })
    .catch( err => {
        console.log(err.message);
    } );


    // n1 e2 Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

const myArrowFunction = (param, callback) => {
  if (param === 'mensaje') {
    callback('Nivel1 Exercici2: este mensaje sale si param es = a mensaje.');
  } else {
    callback('Nivel1 Exercici2: este es mi mensaje personalizado');
  }
};

// invocar
const callbackFunction = (output) => {
  console.log(output);
};

myArrowFunction('otro', callbackFunction);


// Nivell 2 - Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
// Exercici 2: Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
// Exercici 3: Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

// estos 3 ejercicios van juntos a continuacion

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
      if (isNaN(id)){
        reject(new TypeError('El id tiene que ser un valor numerico'));
      } else {
      setTimeout(() => {
        let employee = employees.find((emp) => emp.id === id);
        if (employee) {
          let salary = salaries.find((sal) => sal.id === id);
          if (salary) {
            employee.salary = salary.salary;
          }
          resolve(employee);
        }
      }, 2000); // operacion asincrona con un delay de 2 segundos
    }});
  };


let getSalary = (employee) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let salary = salaries.find((sal) => sal.id === employee.id);
        if (salary) {
          resolve(salary.salary);
        } else if (id !== 'number'){
          reject(new Error('El id debe ser un numero'));
        }
      }, 2000); // operacion asincrona con un delay de 2 segundos
    });
  };

//invocacion de las funciones y promesas

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
  
 // Nivell 3 - Exercici 1 Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

 setTimeout(() => {
    console.log(`Nivell 3 - Exercici 1`)  
    getEmployee('t');
}, 7000)  


