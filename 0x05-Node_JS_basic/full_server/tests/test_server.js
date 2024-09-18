const chai = require('chai');
const chaiHttp = require('chai-http');

process.argv[2] = './database.csv';

import app from './server';

chai.use(chaiHttp);
chai.should();

describe('Full HTTP server using Express', () => {
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

describe('Full HTTP server using Express', () => {
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
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
            done();
          });
      });
    });
  });
});

describe('Full HTTP server using Express', () => {
  describe('/students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });

      it('Returns the right content', (done) => {
        chai
          .request(app)
          .get('/students/SWE')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(200);
            chai.expect(response.text).to.equal(`List: Guillaume, Joseph, Paul, Tommy`);
            done();
          });
      });
    });
  });
});

describe('Full HTTP server using Express', () => {
  describe('/students/:major endpoint', () => {
    describe('When the database is available', () => {
      before(() => {
        process.argv[2] = './database.csv';
      });
      it('Returns the right error when the parameter is wrong', (done) => {
        chai
          .request(app)
          .get('/students/BLABLA')
          .end((error, response) => {
            chai.expect(response.statusCode).to.equal(500);
            chai.expect(response.text).to.equal(`Major parameter must be CS or SWE`);
            done();
          });
      });
    });
  });
});

process.argv[2] = './blabla.csv';

describe('Full HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('Returns the right error message', (done) => {
      chai
        .request(app)
        .get('/students')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`Cannot load the database`);
          done();
        });
    });
  });
});

describe('Full HTTP server using Express', () => {
  describe('When the database is not available', () => {
    before(() => {
      process.argv[2] = './blabla.csv';
    });
    it('Returns the right error message', (done) => {
      chai
        .request(app)
        .get('/students/SWE')
        .end((error, response) => {
          chai.expect(response.text).to.equal(`Cannot load the database`);
          done();
        });
    });
  });
});
