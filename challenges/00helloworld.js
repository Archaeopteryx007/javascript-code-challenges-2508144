function hello() {
  // Write your code here
  // run test by: npm run test challenges/00helloworld.js 
  return "Hello world.";
} 


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.equal(hello(), 'Hello world.');
  });
});
