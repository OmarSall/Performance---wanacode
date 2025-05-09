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

const employees = [
  {
    id: 2,
    name: "John",
    job: "Frontend Developer",
    companyId: 9,
    managerId: 10,
  },
  {
    id: 8,
    name: "Amy",
    job: "User Interface Designer",
    companyId: 1,
    managerId: 13,
  },
  {
    id: 17,
    name: "Liam",
    job: "Backend Developer",
    companyId: 4,
    managerId: 60,
  },
  {
    id: 50,
    name: "Emma",
    job: "CTO",
    companyId: 1,
    managerId: null,
  },
  {
    id: 41,
    name: "Sophia",
    job: "DevOps Engineer",
    companyId: 1,
    managerId: 13,
  },
  {
    id: 32,
    name: "Mia",
    job: "Fullstack Developer",
    companyId: 9,
    managerId: 2,
  },
  {
    id: 21,
    name: "Adam",
    job: "Project Manager",
    companyId: 9,
    managerId: null,
  },
  {
    id: 22,
    name: "Noah",
    job: "Security Engineer",
    companyId: 4,
    managerId: 60,
  },
  {
    id: 10,
    name: "John",
    job: "Project Manager",
    companyId: 1,
    managerId: 50,
  },
  {
    id: 60,
    name: "Lucas",
    job: "Technical Lead",
    companyId: 4,
    managerId: 75,
  },
  {
    id: 35,
    name: "Ethan",
    job: "Data Scientist",
    companyId: 9,
    managerId: 21,
  },
  {
    id: 75,
    name: "Michael",
    job: "CEO",
    companyId: 4,
    managerId: null,
  },
  {
    id: 13,
    name: "Olivia",
    job: "Fullstack Developer",
    companyId: 1,
    managerId: 10,
  },
];


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
