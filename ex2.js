// Write the getMostCommonJobs function with the O(n) time complexity. It should return an array of
// the most common jobs.
// If there are multiple job titles tied for the most common position, return an array with
// multiple elements.

getMostCommonJobs(employees); // ['Project Manager', 'Fullstack Developer']

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

const companies = [
  {
    id: 1,
    name: "Cloud Innovations",
  },
  {
    id: 4,
    name: "Fast Code Solutions",
  },
  {
    id: 9,
    name: "Pixel Systems",
  },
];

function getMostCommonJobs(employees) {
  const jobCounts = {};
  let maxCount = 0;

  for (const employee of employees) {
    const job = employee.job;
    jobCounts[job] = (jobCounts[job] || 0) + 1;

    if (jobCounts[job] > maxCount) {
      maxCount = jobCounts[job];
    }
  }

  const mostCommonJobs = [];

  for (const job in jobCounts) {
    if (jobCounts[job] === maxCount) {
      mostCommonJobs.push(job);
    }
  }

  return mostCommonJobs;
}

console.log(getMostCommonJobs(employees));
