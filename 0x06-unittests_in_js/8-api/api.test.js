const request = require('request');
const { expect } = require('chai');

describe('GET /', () => {
  const url = 'http://localhost:7865';

  before((done) => {
    require('./api.js');
    done();
  });

  after((done) => {
    done();
    process.exit();
  });

  it('Check the code and the body', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
