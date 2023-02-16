function redistributeWealth(wealth) {
  // Write your code here
  var sum = 0;
  var n = 0;
  wealth.forEach(element => {
    sum =+ element;
    n =+ 1;
  });
  var avg = sum / n;
  var arr[];
  for (var i = 0; i < n; i =+ 1){
    arr
  };
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.deepEqual(redistributeWealth([3, 3, 3, 3]), [3, 3, 3, 3]);
    assert.deepEqual(redistributeWealth([1, 2, 3, 4]), [2.5, 2.5, 2.5, 2.5]);
    assert.deepEqual(redistributeWealth([1, 1, 5, 4, 9]), [4, 4, 4, 4, 4]);
    assert.deepEqual(redistributeWealth([3, 4, 5, 3, 7, 2, 3, 12, 15]), [6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });
});
