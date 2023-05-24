const {divide } = require('../app/matematico')

describe(`testing the function divide`, () => {

  test('divide 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
  });
});
