// Verify through tests the creation of instances of the abstract class of the exercise Classes & Arrow Functions N3 E1.


function crearClaseAbstracta(constructor, methods) {
    function ClaseAbstracta() {
      if (this.constructor === ClaseAbstracta) {
        throw new Error("No se puede instanciar una clase abstracta");
      }
      constructor.apply(this, arguments);
    }
  
    Object.assign(ClaseAbstracta.prototype, methods);
  
    return ClaseAbstracta;
  }
  
  function createProgramerInstance(name, surname, skill) {
    // Crea una subclase de Worker llamada programer
    const Programer = function () {
      Worker.call(this); // invoca el constructor de la superclase
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
    };
  
    return new Programer();
  }
  
  // Define the abstract class "Worker"
  const Worker = crearClaseAbstracta(
    function () {
      
    },
    {
      giveNameAndLast() {
        throw new Error("S'ha d'implementar el mètode abstracte 'giveNameAndLast'");
      },
      writeName() {
        throw new Error("S'ha d'implementar el mètode abstracte 'giveCompetences'");
      },
    }
  );
  
  // Create an instance of Programer
  const programer = createProgramerInstance('Idi', 'Amin', 'node.js');
  console.log(programer.giveNameAndLast());
  programer.writeName();
  
  module.exports = { crearClaseAbstracta, createProgramerInstance };
  