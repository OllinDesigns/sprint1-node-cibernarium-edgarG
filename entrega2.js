// Entrega 1.2
//Nivell 1 - Exercici 1 : Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

((a, b) => {
    const suma = a + b;
    console.log('Nivell 1 - Exercici 1: El resultado de a + b es:', suma);
  })(10, 4);
  
  // Nivell 2 - Exercici 1
  // Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.
  
  let gitarPlayer = {};
  const whoIs = (description)=>{
      description.name  = "Randi Ushida";
      description.band = "GISM";
      description.genre = "Metal-Punk";
      return description;
  }
  console.log(`Nivell 2 - Execici 1: el guitarrista de hoy es:`);
  console.log(whoIs(gitarPlayer));
  
  // Nivell 2 - Exercici 2
  // Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.
  
  class Persona {
      constructor(name, age) {
        this.name = name;
        this.year = age;
      }
      dirNom() {
        return this.name;
      }
    }
    
    const myFriend = new Persona("Benicio", 44);
    console.log("Nivell 2 - Exercici 2: Mi mejor amigo es " + myFriend.dirNom())
    
  // Nivell 3 - Exercici 1
  // Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.
  
  function crearClaseAbstracta(constructor, methods) {
    function ClaseAbstracta() {
      if (this.constructor === ClaseAbstracta) {
        throw new Error("No es pot instància de classe abstracta");
      }
      constructor.apply(this, arguments);
    }
  
    ClaseAbstracta.prototype = Object.create(null);
    Object.assign(ClaseAbstracta.prototype, methods);
    ClaseAbstracta.prototype.constructor = ClaseAbstracta;
  
    return ClaseAbstracta;
  }
  
  // Defino la clase abstracta "Worker"
  const Worker = crearClaseAbstracta(
    function () {
        // consolloguea el constructor
      console.log("Nivell 3 - Exercici 1: Creando trabajador");
    },
    {
        //los metodos
      giveNameAndLast() {
        throw new Error("S'ha d'implementar el mètode abstracte 'giveNameAndLast'");
      },
      writeName() {
        throw new Error("S'ha d'implementar el mètode abstracte 'giveCompetences'");
      },
    }
  );
  
  // Crea una subclase de Worker llamada programer
  const Programer = function (name, surname, skill) {
   Worker.call(this); // invoca la superclase constructor
    this.name = name;
    this.surname = surname;
    this.skill = skill;
  };
  Programer.prototype = Object.create(Worker.prototype);
  Programer.prototype.constructor = Programer;
  Programer.prototype.giveNameAndLast = function () {
    return this.name + " " + this.surname;
  };
  
  Programer.prototype.writeName = function () {
    console.log(`El nombre del programador es ${this.name}, su apellido ${this.surname} y sabe ${this.skill}`);
  }
  
  // Crea una instancia de Programer
  const programer = new Programer('Idi', 'Amin', 'node.js');
  console.log(programer.giveNameAndLast()); 
  programer.writeName(); 