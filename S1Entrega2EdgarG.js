// Entrega 1.2
//Nivell 1 - Exercici 1 : Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

const returnName = (() => {
    const returnName2 = ((name1, name2) => {
        console.log("el resultado de la funcion es: " + name1 + " " + name2);
    });
    
    console.log(returnName2("Willington", "Ortiz")); 
    
})();

// Nivell 2 - Exercici 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

let gitarPlayer = {};
const whoIs = (description)=>{
    description.name  = "Randi Ushida";
    description.band = "GISM";
    description.genre = "Metal-Punk";
    return description;
}
console.log(whoIs(gitarPlayer));

// Nivell 2 - Exercici 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Band {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    dirNom() {
      return this.name;
    }
  }
  
  const myBand = new Band("Parabellum", 1984);
  console.log("My favourite band today is " + myBand.dirNom())
  
// Nivell 3 - Exercici 1
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

// Creacion de una clase abstracta (function constuctor)
function Worker(){
  this.workName="workName";
  if(this.constructor === Worker){
      throw new Error("No se puede crear una instancia de esta clase abstracta");
  }
};
// Metodo de la clase abstracta (function)
Worker.prototype.display=function(){
  return "El nom del treballador és: "+this.workName;
};
// aqui creo una subclase (function constructor)
function Programer(nombreCompleto) {
  this.workName=nombreCompleto;
}
// he creado un objeto de una subclase, extendiendo a clase abstracta
Programer.prototype=Object.create(Worker.prototype);

let programerWorker=new Programer("Idi Amin");
console.log(programerWorker.display());

let programerWorker2=new Programer("Ana Curra");
console.log(programerWorker2.display());

let programerWorker3=new Programer("Wendy Williams");
console.log(`Exercici 1 - Nivell 3: invoco un objecte que fa instàncies d'una classe abstracta amb la definició següent: ${programerWorker3.display()}.`);