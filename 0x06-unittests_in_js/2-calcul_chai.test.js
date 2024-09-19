const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test calculateNumber using the chia expect module:', () => {
  describe('SUM operation', () => {
    it('should correctly sum two whole numbers', () => {
      expect(calculateNumber('SUM', 5, 3)).to.equal(8);
    });

    it('should correctly sum two dicemal numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should correctly divide one negative and one positive number', () => {
      expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4);
    });

    it('should correctly sum two negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract two whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });

    it('should correctly subtract two dicemal numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should correctly divide one negative and one positive number', () => {
      expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
    });

    it('should correctly subtract two negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide two whole numbers', () => {
      expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
    });

    it('should correctly divide two dicemal numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should handle division with negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    });

    it('should correctly divide two negative numbers', () => {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    });
  });

  describe('Invalid operation', () => {
    it('should return an error message for invalid operation type', () => {
      expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal(
        'Opertation type is not valid',
      );
    });
  });
});
