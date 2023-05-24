const {add} = require('../app/matematico')


describe('Testing of the add function', () => {

  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  // console.log("Addition:", add(5, 10, 15)); 
  
  test('second test', () => {
    expect(add(4, 6)).toBe(10);
  })

});
