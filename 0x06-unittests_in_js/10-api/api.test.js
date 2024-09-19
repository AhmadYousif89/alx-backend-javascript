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

describe('GET /available_payments', () => {
  const url = 'http://localhost:7865/available_payments';

  it('Should correctly call the endpoint /available_payments', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});

describe('POST /login', () => {
  const url = 'http://localhost:7865/login';
  const options = { json: { userName: 'Mr.X' } };

  it('Should correctly call the endpoint /login', (done) => {
    request.post(url, options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Mr.X');
      done();
    });
  });

  it('Should return 400 for missing username', (done) => {
    request.post(url, {}, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.equal('username is missing');
      done();
    });
  });
});
