const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../6-http_express');

chai.use(chaiHttp);
chai.should();

describe('small HTTP server using Express', () => {
  it('returns the right content', () => new Promise((done) => {
    chai
      .request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response.text).to.equal('Hello Holberton School!');
        done();
      });
  }));

  it('returns the right status', () => new Promise((done) => {
    chai
      .request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response.statusCode).to.equal(200);
        done();
      });
  }));
});

describe('small HTTP server using Express', () => {
  it('returns the right status', () => new Promise((done) => {
    chai
      .request(app)
      .get('/nope')
      .end((error, response) => {
        chai.expect(response.statusCode).to.equal(404);
        done();
      });
  }));
});
