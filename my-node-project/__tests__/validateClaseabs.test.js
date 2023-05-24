// Verify through tests the creation of instances of the abstract class of the exercise Classes & Arrow Functions N3 E1.

const { crearClaseAbstracta, createProgramerInstance } = require('../app/abstractClass');
const { spyOn } = require('jest');

// Test suite for the abstract class Worker
describe('Worker (Abstract Class)', () => {
  // Define a dummy constructor and methods for testing purposes
  const constructor = jest.fn();
  const methods = {
    giveNameAndLast: jest.fn(),
    writeName: jest.fn(),
  };

  // Create the abstract class Worker using the crearClaseAbstracta function
  const Worker = crearClaseAbstracta(constructor, methods);

  // Test the instantiation of the abstract class
  it('should throw an error when instantiated directly', () => {
    expect(() => new Worker()).toThrow(Error);
  });

});

// Test suite for the subclass Programer
describe('Programer (Subclass of Worker)', () => {
  // Define sample data for creating instances of Programer
  const name = 'Idi';
  const surname = 'Amin';
  const skill = 'node.js';

  // Create an instance of Programer using the createProgramerInstance function
  const programer = createProgramerInstance(name, surname, skill);

  // Test the inherited method from the abstract class
  it('should return the correct name and surname', () => {
    expect(programer.giveNameAndLast()).toBe(`${name} ${surname}`);
  });

  // Test the additional method defined in the subclass
  it('should write the correct name, surname, and skill', () => {
    // Mock console.log to spy on the output
    const consoleSpy = jest.spyOn(console, 'log');
    programer.writeName();
    expect(consoleSpy).toHaveBeenCalledWith(`El nombre del programador es ${name}, su apellido ${surname} y sabe ${skill}`);
    consoleSpy.mockRestore();
  });
});

