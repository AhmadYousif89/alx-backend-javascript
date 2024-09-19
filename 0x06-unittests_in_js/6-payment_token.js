/**
 * Retrieves a payment token from the API
 * @param {boolean} success - Indicates whether the API call should be successful
 * @returns {Promise<Object>} A promise that resolves with the API response
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
