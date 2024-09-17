const http = require('http');
const fs = require('fs').promises;

async function countStudents(path) {
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

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    return res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(data => {
        res.write('This is the list of our students\n');
        res.end(data);
      })
      .catch(error => {
        res.statusCode = 404;
        res.end(error.message);
      });
    return;
  }

  res.statusCode = 404;
  res.end('Not found');
});

app.listen(1245);

module.exports = app;
