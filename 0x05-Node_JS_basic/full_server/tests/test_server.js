import app from './server.js';

const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

chai.use(chaiHttp);
chai.should();

describe('full HTTP server using Express', () => {
  describe('/ endpoint', () => {
    it('returns the right content', () =>
      new Promise((done) => {
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

describe('full HTTP server using Express', () => {
  describe('/students endpoint', () => {
    describe('when the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('returns the right content', () =>
        new Promise((done) => {
          chai
            .request(app)
            .get('/students')
            .end((error, response) => {
              chai.expect(response.statusCode).to.equal(200);
              chai.expect(response.text).to.have.string(`This is the list of our students
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
              done();
            });
        }));
    });
  });
});

describe('full HTTP server using Express', () => {
  describe('/students/:major endpoint', () => {
    describe('when the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('returns the right content', () =>
        new Promise((done) => {
          chai
            .request(app)
            .get('/students/SWE')
            .end((error, response) => {
              chai.expect(response.statusCode).to.equal(200);
              chai.expect(response.text).to.equal('List: Guillaume, Joseph, Paul, Tommy');
              done();
            });
        }));
    });
  });
});

describe('full HTTP server using Express', () => {
  describe('/students/:major endpoint', () => {
    describe('when the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('returns the right error when the parameter is wrong', () =>
        new Promise((done) => {
          chai
            .request(app)
            .get('/students/BLABLA')
            .end((error, response) => {
              chai.expect(response.statusCode).to.equal(500);
              chai.expect(response.text).to.equal('Major parameter must be CS or SWE');
              done();
            });
        }));
    });
  });
});

process.argv[2] = './blabla.csv';

describe('full HTTP server using Express', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () =>
      new Promise((done) => {
        chai
          .request(app)
          .get('/students')
          .end((error, response) => {
            chai.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      }));
  });
});

describe('full HTTP server using Express', () => {
  describe('when the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('returns the right error message', () =>
      new Promise((done) => {
        chai
          .request(app)
          .get('/students/SWE')
          .end((error, response) => {
            chai.expect(response.text).to.equal('Cannot load the database');
            done();
          });
      }));
  });
});
