const fs = require('fs');

function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const students = fs.readFileSync(path, 'utf8').split('\n').filter(Boolean).slice(1);

  console.log('Number of students:', students.length);

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
}

module.exports = countStudents;
