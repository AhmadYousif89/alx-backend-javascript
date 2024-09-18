const fs = require('fs').promises;

/**
 * Read data from a CSV file.
 * @param {string} csvFile The path to the CSV data file.
 * @returns {Promise<{firstname: string, lastname: string, age: number}[]>}
 */
async function readDatabase(csvFile) {
  try {
    const data = await fs.readFile(csvFile, 'utf-8');
    const students = data.trim().split('\n').slice(1);
    return students.reduce((acc, student) => {
      const [firstname, lastname, age, field] = student.split(',');
      (acc[field] = acc[field] || []).push({ firstname, lastname, age: Number(age) });
      return acc;
    }, {});
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
