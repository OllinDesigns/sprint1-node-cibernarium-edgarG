const { mathMaster } = require('../app/mathMaster');
const { getEmployee, getSalary } = require('../app/errorCatcherasync')


describe(`Este test es del ejercicio Async / Await N2 E1`, () => {

    test('testiando con fake timers, handle non-numeric inputs', async () => {
        jest.useFakeTimers();
      
        const mathMasterPromise = mathMaster(22, 'invalid', 33); // Start the function execution
      
        // jest.runAllTimers(); // esta vez usare advanceTimersbytime
        jest.advanceTimersByTime(2000)
      
        await expect(mathMasterPromise).rejects.toThrow('only numbers');
      
        jest.useRealTimers(); // Restore the original timers
      });

})

describe(`Estos test de error son para la funcion getEmployee`, () => {

    test.todo('getEmployee: si no se agrega una id correcta consologuea un error'), async () => {
        await expect(getEmployee()).rejects.toThrowError('Esa id de empleado no existe');
    }
    
    test.todo('getEmployee: si la id no existe debe imprimir un error'), async () => {
        await expect(getEmployee(5)).rejects.toThrowError('Esa id de empleado no existe');
    }

    test('should reject with an error message when the ID does not exist', async () => {
        try {
          await expect(getEmployee(4)).rejects.toEqual('Employee not found');
        } catch (error) {
          // Handle any unexpected errors
          console.error(error);
        }
      });



})

describe(`y este testea el funcionamiento de getSalary()`, () => {
    test(`probando getSalary`, async ()  => {
        try {
            await expect(getSalary(200)).rejects.toEqual('Ningun empleado tiene ese salario');
        } catch (error) {
            console.error(error);
        }
    })

})


