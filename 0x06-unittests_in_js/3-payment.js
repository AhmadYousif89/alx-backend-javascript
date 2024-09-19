const calculateNumber = require('./utils').calculateNumber;

/**
 * Calculate the total value of a payment
 * @param {number} totalAmount
 * @param {number} totalShipping
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
  return total;
}

module.exports = sendPaymentRequestToApi;
