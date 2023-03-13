function redistributeWealth(wealth) {
  // Write your code here
  var sum = 0;
  // var n = 0;
  wealth.forEach(element => {
    sum += element;
    // n += 1;
  });
  var sum2 = wealth.reduce(function(sum, num) {
    return sum + num;
  }, 0);
  // var avg = sum / wealth.length;
  var avg = sum2 / wealth.length;
  var myarr = [];
  for (var i = 0; i < wealth.length; i += 1){
    myarr.push(avg);
  }
  return myarr;
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
