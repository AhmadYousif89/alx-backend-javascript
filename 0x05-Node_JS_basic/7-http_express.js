const fs = require('fs').promises;
const express = require('express');

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(process.argv[2])
    .then(data => {
      res.write('This is the list of our students\n');
      res.end(data);
    })
    .catch(error => {
      res.statusCode = 404;
      res.end(error.message);
    });
});

app.listen(1245);

module.exports = app;

async function countStudents (path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data.split('\n').filter(Boolean).slice(1);

    let output = `Number of students: ${students.length}\n`;

    const fields = students.reduce((acc, line) => {
      const [firstName, , , field] = line.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstName);
      return acc;
    }, {});

    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(
        ', '
      )}`;
    }

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
