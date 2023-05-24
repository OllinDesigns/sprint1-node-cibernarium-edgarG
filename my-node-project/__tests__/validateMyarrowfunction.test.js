const myArrowFunction = require('../app/myarrowfunction')

test('prints the correct message for "message" parameter', () => {
  const callback = jest.fn(); // Create a mock callback function

  myArrowFunction('mensaje', callback);

  expect(callback).toHaveBeenCalledWith('Nivel1 Exercici2: este mensaje sale si param es = a mensaje.');
});

test('prints the correct message for "another" parameter', () => {
  const callback = jest.fn(); // Create a mock callback function

  myArrowFunction('another', callback);

  expect(callback).toHaveBeenCalledWith('Nivel1 Exercici2: este es mi mensaje personalizado.');
});
