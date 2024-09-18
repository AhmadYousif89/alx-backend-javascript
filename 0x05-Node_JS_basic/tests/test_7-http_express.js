const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';
const app = require('../7-http_express');

chai.use(chaiHttp);
chai.should();

describe('More complex HTTP server using Express', () => {
  describe('/ endpoint', () => {
    it('Returns the right content', (done) => {
      chai
        .request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Hello Holberton School!');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });
});

describe('More complex HTTP server using Express', () => {
  describe('/students endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('Returns the right content', (done) => {
        chai
          .request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.have.string(`This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();
          });
      });
    });
  });
});

describe('More complex HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('Returns the right error message', (done) => {
      chai
        .request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`This is the list of our students
Cannot load the database`);
          done();
        });
    });
  });
});
