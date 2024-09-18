import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static async getAllStudents(request, response) {
    const csvFile = process.argv[2] || '';

    try {
      const studentGroups = await readDatabase(csvFile);
      const responseParts = ['This is the list of our students'];
      const sortedEntries = Object.entries(studentGroups).sort((a, b) =>
        a[0].toLowerCase().localeCompare(b[0].toLowerCase()),
      );

      for (const [field, group] of sortedEntries) {
        const names = group.map((student) => student.firstname).join(', ');
        responseParts.push(
          `Number of students in ${field}: ${group.length}. List: ${names}`,
        );
      }
      response.status(200).send(responseParts.join('\n'));
    } catch (err) {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const csvFile = process.argv[2] || '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentGroups = await readDatabase(csvFile);
      const group = studentGroups[major] || [];
      const responseText = `List: ${group
        .map((student) => student.firstname)
        .join(', ')}`;
      response.status(200).send(responseText);
    } catch (err) {
      response.status(500).send(err instanceof Error ? err.message : err.toString());
    }
  }
}

export default StudentsController;
module.exports = StudentsController;
