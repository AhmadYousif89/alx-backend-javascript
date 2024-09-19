const Utils = {
  /**
   * Calculate the result of a math operation between two numbers
   * @param {'SUM'|'SUBTRACT'|'DIVIDE'} type: the type of operation to perform
   * @param {number} a: The first number
   * @param {number} b: The second number
   * @returns: The result of the operation or 'Error' if the operation is invalid
   */
  calculateNumber(type, a, b) {
    const operations = {
      SUM: (a, b) => Math.round(a) + Math.round(b),
      SUBTRACT: (a, b) => Math.round(a) - Math.round(b),
      DIVIDE: (a, b) => {
        if (Math.round(b) === 0) return 'Error';
        return Math.round(a) / Math.round(b);
      },
    };

    return operations[type] ? operations[type](a, b) : 'Opertation type is not valid';
  },
};

module.exports = Utils;
