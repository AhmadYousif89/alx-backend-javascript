export default function createIteratorObject(report) {
  const employees = [];
  for (const empList of Object.values(report.allEmployees)) {
    employees.push(...empList);
  }

  return employees;
}
