export interface employeesType {
  id: number;
  name: string;
  position: string;
  salary: number;
}

export const employeesList: employeesType[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    salary: 80000,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Project Manager",
    salary: 95000,
  },
  {
    id: 3,
    name: "Emily Johnson",
    position: "Designer",
    salary: 70000,
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "QA Engineer",
    salary: 75000,
  },
  {
    id: 5,
    name: "Jessica Davis",
    position: "HR Manager",
    salary: 85000,
  },
];
