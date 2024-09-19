const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../4-http');

chai.use(chaiHttp);
chai.should();

describe('small HTTP server', () => {
  it('returns the right content for /', () => new Promise((done) => {
    chai
      .request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response.text).to.equal('Hello Holberton School!');
        chai.expect(response.statusCode).to.equal(200);
        done();
      });
  }));

  it('returns the right content for /test', () => new Promise((done) => {
    chai
      .request(app)
      .get('/test')
      .end((error, response) => {
        chai.expect(response.text).to.equal('Hello Holberton School!');
        chai.expect(response.statusCode).to.equal(200);
        done();
      });
  }));
});
