const {multiply} = require('../app/matematico')

test('multiply 4 * 4 to equal 16', () => {
  expect( multiply(4, 4)).toBe(16);
});

// console.log("Subtraction:", subtract(20, 5, 3)); // Output: 12