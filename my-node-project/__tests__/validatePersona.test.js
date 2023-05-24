// Create a mock that tests calls to the constructor of the Person class and its method. dirName() in the exercise Classes & Arrow Functions - N2 E2 and test that they work.

// Crea una mock function para el metodo dirNom
const MockDirNom = jest.fn();

// Mock de la clase Persona
jest.mock('../app/classPersonanew', () => {
  return jest.fn().mockImplementation(function (name, age) {
    this.name = name;
    this.year = age;
    this.dirNom = MockDirNom;
  });
});

const Persona = require('../app/classPersonanew');

describe('Persona class', () => {
  // Test del constructor
  test('debe llamar al constructor con los argumentos correctos', () => {
    const name = 'Benicio';
    const age = 44;

    // Crea uns instancia con el metodo constructor Persona 
    const myFriend = new Persona(name, age);

    // Compruebe que se ha llamado al mock constructor con los argumentos correctos
    expect(Persona).toHaveBeenCalledWith(name, age);
  });

  // Testea el dirNom method
  it('Debe llamar al metodo dirNom', () => {
    const myFriend = new Persona('Benicio', 44);

    // llama al dirNom method
    myFriend.dirNom();

    // Verifica que el mock dirNom method fue invocado
    expect(MockDirNom).toHaveBeenCalled();
  });
});
