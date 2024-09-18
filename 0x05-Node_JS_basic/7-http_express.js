const express = require('express');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const CSV_FILE = process.argv[2] || '';

/**
 * Count the students for each study field found in a CSV data file.
 * @param {String} csvFile The path to the CSV data file.
 */
async function countStudents(csvFile) {
  try {
    const data = await fs.readFile(csvFile, 'utf-8');

    const students = data.trim().split('\n').slice(1).filter(Boolean);
    const fields = students.reduce((acc, student) => {
      const [firstname, , , field] = student.split(',');

      acc[field] = acc[field] || [];
      acc[field].push(firstname);
      return acc;
    }, {});

    let output = `Number of students: ${students.length}\n`;

    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(
        ', ',
      )}\n`;
    }

    return output;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

function sendResponse(res, statusCode, content) {
  res.status(statusCode).type('text/plain').send(content);
}

const routes = {
  '/': (_, res) => {
    sendResponse(res, 200, 'Hello Holberton School!');
  },

  '/students': async (_, res) => {
    try {
      const data = await countStudents(CSV_FILE);
      sendResponse(res, 200, `This is the list of our students\n${data}`);
    } catch (err) {
      sendResponse(res, 200, err.message);
    }
  },
};

for (const [path, handler] of Object.entries(routes)) {
  app.get(path, handler);
}

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
