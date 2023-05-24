// Import any necessary testing libraries or frameworks
const assert = require('assert');

// Import the function you want to test
const { myAsyncFunction } = require('../app/asyncawaitfc');

// Describe your test suite
describe('myAsyncFunction', () => {
    // Test case 1: Testing with a non-empty message
    it('should resolve with the provided message', async () => {
      const message = 'didi';
      
      // Call the async function and await its result
      const result = await myAsyncFunction(message);
      
      // Assert that the resolved value matches the expected message
      assert.strictEqual(result, message);
    });
  
    // Test case 2: Testing with an empty message
    it('should reject with an error for an empty message', async () => {
      const message = '';
      
      try {
        // Call the async function and await its result
        await myAsyncFunction(message);
        
        // If the promise does not reject, fail the test
        assert.fail('Expected promise to reject');
      } catch (error) {
        // Assert that the error message matches the expected error message
        assert.strictEqual(error.message, 'empty message');
      }
    });
  });
