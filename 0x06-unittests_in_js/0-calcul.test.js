const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calculateNumber using the assert module:', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, -3), -4);
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle mixed positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
    assert.strictEqual(calculateNumber(1.5, -3.7), -2);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0, 3.7), 4);
    assert.strictEqual(calculateNumber(1.5, 0), 2);
  });

  it('should handle floating point precision', () => {
    assert.strictEqual(calculateNumber(0.1 + 0.2, 0), 0);
    assert.strictEqual(calculateNumber(0.1 + 0.2, 0.1 + 0.2), 0);
  });

  it('should handle very large numbers', () => {
    assert.strictEqual(
      calculateNumber(Number.MAX_SAFE_INTEGER, 1),
      Number.MAX_SAFE_INTEGER + 1,
    );
    assert.strictEqual(
      calculateNumber(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER),
      2 * Number.MAX_SAFE_INTEGER,
    );
  });

  it('should handle very small numbers', () => {
    assert.strictEqual(calculateNumber(Number.MIN_VALUE, Number.MIN_VALUE), 0);
    assert.strictEqual(calculateNumber(-Number.MIN_VALUE, -Number.MIN_VALUE), -0);
  });

  it('should corese string numbers to numbers', () => {
    assert.strictEqual(calculateNumber('1', 2), 3);
    assert.strictEqual(calculateNumber(1, '2'), 3);
    assert.strictEqual(calculateNumber('1', '2'), 3);
  });

  it('should return NaN when non-numeric inputs are provided', () => {
    assert(isNaN(calculateNumber('abc', 1)));
    assert(isNaN(calculateNumber(1, 'def')));
    assert(isNaN(calculateNumber('1', 'ghi')));
  });
});
