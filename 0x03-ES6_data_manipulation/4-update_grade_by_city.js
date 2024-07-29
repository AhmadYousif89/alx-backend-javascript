/**
 * @param {{id: number, firstName: string, location: string }[]} list
 * @param {string} city
 * @param {{ studentId: string, grade: number }} newGrades
 * @returns
 */
export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((newGrade) => newGrade.studentId === student.id);
      return { ...student, grade: studentGrade ? studentGrade.grade : 'N/A' };
    });
}
