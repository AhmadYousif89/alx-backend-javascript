const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';
const app = require('../5-http');

chai.use(chaiHttp);
chai.should();

describe('more complex HTTP server using node', () => {
  describe('/endpoint', () => {
    it('returns the right content', () => new Promise((done) => {
      chai
        .request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Hello Holberton School!');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    }));
  });
});

describe('more complex HTTP server using node', () => {
  describe('/students endpoint', () => {
    describe('when the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('returns the right content', () => new Promise((done) => {
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
      }));
    });
  });
});

describe('more complex HTTP server using node', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () => new Promise((done) => {
      chai
        .request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`This is the list of our students
Cannot load the database`);
          done();
        });
    }));
  });
});
