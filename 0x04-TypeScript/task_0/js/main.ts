interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'EGY',
};

const student2: Student = {
  firstName: 'Jack',
  lastName: 'Smith',
  age: 25,
  location: 'USA',
};

const studentsList: Student[] = [student1, student2];

function createStudentTable(students: Student[]) {
  const tableTemplate = `
    <table style="display:block; max-width: 600px; margin: 0 auto; background-color: #f5f5f5;">
      <thead style="display:block; padding: 10px; background-color: #333; color: #f1f2f3;">
        <tr style="display: grid; grid-template-columns: 30px repeat(4, 1fr); gap: 1rem; align-items: center; text-align: left">
          <td style="font-size: 1.25rem">#</td>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody style="display:block; padding: 10px">
        ${students
          .map((student, i) => {
            const isOdd = i % 2 === 0;
            const borderBottom = isOdd && 'border-bottom: 1px #ccc solid;';
            return `
                <tr style="display: grid; grid-template-columns: 30px repeat(4, 1fr); gap: 1rem; gap: 1rem; padding-block: 10px; ${borderBottom}">
                  <td>${i + 1}</td>
                  <td>${student.firstName}</td>
                  <td>${student.lastName}</td>
                  <td>${student.age}</td>
                  <td>${student.location}</td>
                </tr>
              `;
          })
          .join('')}
      </tbody>
    </table>
    `;

  return tableTemplate;
}

const header = '<h1 style="text-align: center;">Students Information</h1>';
document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('afterend', createStudentTable(studentsList));
