const fs = require('fs').promises;

/**
 * Count the students for each study field found in a CSV data file.
 * @param {String} csvFile The path to the CSV data file.
 */

async function countStudents(csvFile) {
  try {
    const data = await fs.readFile(csvFile, 'utf-8');

    const students = data.split('\n').filter(Boolean).slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, student) => {
      const [firstname, , , field] = student.split(',');
      if (!acc[field]) {
        acc[field] = [];
      }
      acc[field].push(firstname);
      return acc;
    }, {});

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
