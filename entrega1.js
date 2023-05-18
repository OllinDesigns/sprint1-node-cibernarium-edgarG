// Edgar Garcia Santos - sprint1 - Entrega 1.1: Functions & Template Literals

// Nivell 1 - Exercici 1
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

function showName1(name) {
    console.log(`Exercici 1 - Nivell 1: Hola, el teu nom d'usuari és: ` + name); 
};
showName1("Darren Peligro");

// Nivell 2 - Exercici 1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

function showNameAndLast(firstName1, lastName1) {

    console.log(`Exercici 1 - Nivell 2: "Hola ${firstName1} ${lastName1}, com et trobes el dia d'avui?"`);
}

showNameAndLast("Wilmar", "Conde");

// Nivell 2 - Exercici 2
// Invoca una funció que retorni un valor des de dins d'una template literal.

function suma1(a, b) { 
    let result = a + b;
    return result
}
console.log(`Exercici 2 - Nivell 2: Resultado de la funcion suma invocada desde un template literal: ${suma1(7, 3)}.`);


// Nivell 3 - Exercici 1
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

// Creamos un array de funciones
const functionsArray = [];
console.log(`Nivell 3 - Exercici 1`);
// llenamos el array con 10 funciones
for (let i = 0; i < 10; i++) {
   
  functionsArray[i] = function() {
    for (let j = 0; j < 10; j++) {
      console.log(j);
      
    }
  };
}

// iteramos llamando cada funcion del array
for (let k = 0; k < 10; k++) {
    console.log("iteration nr " + k)
  functionsArray[k]();
}

// Nivell 3 - Exercici 2
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

(function(name) {
    console.log("Nivell 3 - Exercici 2: Hola " + name + "!");
  })("Edgar");