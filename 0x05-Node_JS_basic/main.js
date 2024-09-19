const displayMessage = require('./0-console');

console.log('------- 0-console ------- ');
displayMessage('Hello NodeJS!');

let countStudents = require('./2-read_file');

console.log('------- 2-read_file ------- ');
// countStudents('nope.csv');
countStudents('database.csv');

countStudents = require('./3-read_file_async');

console.log('------- 3-read_file_async ------- ');
countStudents('nope.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
countStudents('database.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
