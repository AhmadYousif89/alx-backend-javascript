const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test calculateNumber using the assert module:', () => {
  describe('SUM operation', () => {
    it('should correctly sum two whole numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should correctly sum two dicemal numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should correctly sum one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 4.5), 4);
    });

    it('should correctly sum two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract two whole numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('should correctly subtract two dicemal numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should correctly subtract one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, 4.5), -6);
    });

    it('should correctly subtract two negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide two whole numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8, 2), 4);
    });

    it('should correctly divide two numbers with decimals', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should correctly divide one negative and one positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    });

    it('should correctly divide two negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('Invalid operation', () => {
    it('should return an error message for invalid operation type', () => {
      assert.strictEqual(
        calculateNumber('INVALID', 1, 3),
        'Opertation type is not valid',
      );
    });
  });
});
