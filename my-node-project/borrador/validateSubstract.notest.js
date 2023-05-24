const {subtract } = require('../app/matematico')

test('subtract 4 - 1 to equal 3', () => {
  expect(subtract(4, 1)).toBe(3);
});

console.log("Subtraction:", subtract(20, 5, 3)); // Output: 12