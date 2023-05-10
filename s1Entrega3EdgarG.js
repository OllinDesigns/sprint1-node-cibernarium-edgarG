// Entrega 1.3: Promises & Callbacks (Edgar Garcia Santos)

// Nivell 1 - Exercici 1
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

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

// Nivell 2 - Exercici 1: Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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

const booleanProove = false;

    const employee1 = employees.find(employees => employees.id === 1);
    const employee2 = employees.find(employees => employees.id === 2);
    const employee3 = employees.find(employees => employees.id === 3);

const getEmployee = new Promise((resolve, reject) => {

    if (!booleanProove) {
    const listEmployees = {employee1, employee2, employee3}
    resolve(listEmployees);  
} else {
    reject(new Error(`This employee does not exist`) )
}
});

// Nivell 2 - Exercici 2 - Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const getSalary = (listEmployees) => {
    const salary1 = salaries.find(salaries => salaries.id === 1);
    const salary2 = salaries.find(salaries => salaries.id === 2);
    const salary3 = salaries.find(salaries => salaries.id === 3);
   
    return new Promise( (resolve) => {
        function employeeSalary(listEmployees){
            if (listEmployees == employee1){
                console.log("Este es " + listEmployees.name + " " + "y gana " + salary1.salary);
            } else if (listEmployees == employee2) {
                console.log(`Este es ${listEmployees.name} y gana ${salary2.salary}`);
            } else if (listEmployees == employee3) {
                console.log(`Este es ${listEmployees.name} y gana ${salary3.salary}`);
            } else {
                console.log(`Por favor ingrese un empleado que se encuentre en el array de objetos`);
            }
    }
    employeeSalary(listEmployees);
        resolve(employeeSalary);
    })  
};

// Nivell 2 - Exercici 3 = Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.
// llamada a ejercicio 1 y 2 de nivel 2

getEmployee
    .then(getSalary(employee3))
    .then(getSalary(employee2))
    .then(getSalary(employee1))
    .then(res => {
        console.log('here we return the function getEmployee() ={object listEmployees}')
        console.log(res)});
    
// Nivell 3 - Exercici 1 Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

const firstPremise1 = true;

const getEmployee1 = new Promise ((resolve, reject) => {
    if(!firstPremise1) {
        resolve(employees);

    } else {
        reject(new Error(`Nivell 3 - Exercici 1 : Error message de la promise causado por un reject y llamado a traves de un catch `));
    }
    
});

getEmployee1
    .then( res => {
        console.log('aqui no habra nada');
        console.log(res);
    })
    .catch( err => {
        console.log(err.message)
    });