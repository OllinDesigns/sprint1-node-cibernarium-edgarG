//Test the execution of the Async / Await N2 E1 exercise using Jest Fake Timers.

const { multiplier, mathMaster } = require('../app/mathMaster');

describe(`here the tests with Jest Fake Timers`, () => {

  // Aqui los test con jest fake timers
test('check if mathMaster works with Jest Fake Timers', () => {
  jest.useFakeTimers(); // Enable fake timers

  expect.assertions(1); // Ensure that the expect statement inside the promise is called

  const mathMasterPromise = mathMaster(1, 1, 1); // Start the function execution

  jest.runAllTimers(); // Run all pending timers immediately

  return mathMasterPromise.then((result) => {
    expect(result).toBe(6);
  });
}); //con fake timers no tengo que darle ningun delay al test, comparando con el test sin fake timers que si hay que darle


test('check if mathMaster works with Jest Fake Timers, other values', () => {
  jest.useFakeTimers(); // Enable fake timers

  expect.assertions(1); // Ensure that the expect statement inside the promise is called

  const mathMasterPromise = mathMaster(1, 1, 1); // Start the function execution

  // jest.runAllTimers(); // Run all pending timers immediately
  jest.advanceTimersByTime(2000)

  return mathMasterPromise.then((result) => {
    expect(result).toBe(6);
  });
}); 


// test de los imputs numericos con jest fake timers
test('testiando con fake timers, handle non-numeric inputs', async () => {
  jest.useFakeTimers();

  const mathMasterPromise = mathMaster(22, 'invalid', 33); // Start the function execution

  // jest.runAllTimers(); // esta vez usare advanceTimersbytime
  jest.advanceTimersByTime(2000)

  await expect(mathMasterPromise).rejects.toThrow('only numbers');

  jest.useRealTimers(); // Restore the original timers
});
});

describe(`Ahora algunos test sin fake timers`, () => {
  test('testeando la funcion multiplier sin fake timers', () => {
    const input = 10;
    return expect(multiplier(input)).resolves.toBe(20);
  });
  
  test('testiando la funcion multiplier sin fake timers', () => {
    const input = 'invalid';
    return expect(multiplier(input)).rejects.toThrow('insert a number');
  });
  
  test('check if mathMaster works', () => {
    expect.assertions(1); // Ensure that the expect statement inside the promise is called
  
    return mathMaster(1, 1, 1).then((result) => {
      expect(result).toBe(6);
    });
  }); // no timeout value needed
  
  // testiando los imputs del test
  test('should handle non-numeric inputs', async () => {
    await expect(mathMaster(22, 'invalid', 33)).rejects.toThrow('only numbers');
  });


})
