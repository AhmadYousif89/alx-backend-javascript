const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data.split('\n').filter(Boolean).slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = students.reduce((acc, line) => {
      const [firstName, , , field] = line.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstName);
      return acc;
    }, {});

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
