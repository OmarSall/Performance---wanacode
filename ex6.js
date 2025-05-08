// Write the getEmployeesGroupedByManagers function with the O(n)
// complexity.

// const employeesGroupedByManagers = getEmployeesGroupedByManagers(employees);

// console.log(employeesGroupedByManagers);

/*
[
  {
    id: 75,
    name: 'Michael',
    job: 'CEO',
    companyId: 4,
    managerId: null,
    employees: [
      {
        id: 60,
        name: 'Lucas',
        job: 'Technical Lead',
        companyId: 4,
        managerId: 75,
        employees: [
          {
            id: 22,
            name: 'Noah',
            job: 'Security Engineer',
            companyId: 4,
            managerId: 60,
            employees: [...]
          },
          // ...
        ]
      }
      // ...
    ]
  }
  // ...
]
*/

function getEmployeesGroupedByManagers(employees) {
  const employeeMap = new Map();

  for (const employee of employees) {
    employee.employees = [];
    employeeMap.set(employee.id, employee);
  }

  const result = [];

  for (const employee of employees) {
    if (employee.managerId !== null) {
      const manager = employeeMap.get(employee.managerId);
      if (manager) {
        manager.employees.push(employee);
      }
    } else {
      result.push(employee);
    }
  }

  return result;
}

const employeesGroupedByManagers = getEmployeesGroupedByManagers(employees);

console.log(employeesGroupedByManagers);
