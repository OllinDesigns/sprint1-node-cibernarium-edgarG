const {add, subtract, multiply, divide} = require('../app/matematico')

describe(`test of add`, () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
      });
      
      test('second test', () => {
        expect(add(4, 6)).toBe(10);
      })
} )

describe(`test of subtract`, () => {
    test('subtract 4 - 1 to equal 3', () => {
        expect(subtract(4, 1)).toBe(3);
    });
} )

describe(`test of multiply`, () => {
    test('multiply 4 * 2 to equal 8', () => {
        expect(multiply(4, 2)).toBe(8);
    });
} )

describe(`test of divide`, () => {
    test(`divide 4 / 2 to equal 2`, () => {
        expect(divide(4, 2)).toBe(2);
    });
} )