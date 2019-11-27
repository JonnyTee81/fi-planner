const assert = require('chai').assert;
const app = require('../app');

// sayHelloResult = app.sayHello();
// addNumbersResult = app.addNumbers(5, 5);

describe('Finance', () => {
  describe('Retirement', () => {
    it('Should return a target retirement number of $2,500,000', () => {
      assert.equal(app.getTargetRetirementAmount(100000), 2500000);
    });

    it('Should return a future value (FV) of $1,123', () => {
      assert.equal(
        app.getFutureValueWithYearlyDeposit(1000, 10, 0.05, 2),
        1123
      );
    });
  });
});
