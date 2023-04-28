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

// Propongo 2 soluciones, la primera se acerca mas al enunciado e itera sobre el array de funciones, pero requiere mucho mas codigo y el resultad en la consola escribe la funcion flecha

// propuesta 1

const function1 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9); 
}

const function2 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function3 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function4 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9); 
}

const function5 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function6 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function7 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9); 
}

const function8 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function9 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

const function10 = () => {
    console.log(1, 2, 3, 4, 5, 6, 7, 8, 9);
}

function iterateArrays() {
    let arrayOfFunction = [
        function1,
        function2,
        function3,
        function4,
        function5,
        function6,
        function7,
        function8,
        function9,
        function10,
    ];

    console.log (" Nivell 3 - Exercici 1 - start of iterations")

    for(let i = 0; i < arrayOfFunction.length; i++) {
        
        console.log("iteration :" + i + " " + arrayOfFunction[i]);

    }
    
}

iterateArrays();

// propuesta2: esta no tiene un array de funciones pero usa mucho menos codigo e imprime el resultado mucho mas limpio

function conutTillTen() {
    console.log("Exercici 1 Nivell 3 : function start here")
    for (let i = 1; i <=10; i++){
        console.log("iteration nr: " + i)

        let myArrayM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];    
        const recorreArray1 = (myArrayM) => {
            
            for(let i=0; i<=myArrayM.length-1; i++){
                console.log(myArrayM[i]);
            }  
        }
        recorreArray1(myArrayM)
    }
    console.log("End of iterations")
}

conutTillTen();

// Nivell 3 - Exercici 2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

const funcionAnonima = (function (){
	function showName3(nombre1){

        console.log("Nivell 3 - Exercici 2:  El nom d'usuari rebut com parametre es: " + nombre1)
	};

    console.log(showName3("Hermes Vargas"))
})();

