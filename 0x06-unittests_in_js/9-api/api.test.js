const request = require('request');
const { expect } = require('chai');

describe('GET /', () => {
  const url = 'http://localhost:7865';

  it('Should correctly call the root endpoint /', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('GET /cart/:id', () => {
  const url = 'http://localhost:7865/cart/';

  it('Should correctly call the endpoint /cart/1', (done) => {
    request.get(url + '1', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      done();
    });
  });

  it('Should return 404 for invalid endpoint /cart/abc', (done) => {
    request.get(url + 'abc', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
