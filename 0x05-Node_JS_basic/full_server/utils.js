/**
 * Reads from a CSV data file.
 * @param {String} csvFile The path to the CSV data file.
 * @returns {Promise<{firstname: String, lastname: String, age: number}[]>}
 */
async function readDatabase(csvFile) {
  try {
    const fs = require('fs').promises;
    const data = await fs.readFile(csvFile, 'utf-8');

    const students = data.trim().split('\n').slice(1).filter(Boolean);
    const fields = students.reduce((acc, student) => {
      const [firstname, lastname, age, field] = student.split(',');
      (acc[field] = acc[field] || []).push({ firstname, lastname, age: Number(age) });
      return acc;
    }, {});

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
module.exports = readDatabase;
