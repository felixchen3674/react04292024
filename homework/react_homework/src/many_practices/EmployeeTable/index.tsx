import React, {useState} from 'react'
import Employee from './employee'
import './index.css'

const employees = [
  {
    id: '1',
    name: 'Chris',
    position: 'Web Developer',
    salary: 6400,
  },
  {
    id: '2',
    name: 'Alex',
    position: 'Customer Service',
    salary: 5400,
  },
  {
    id: '3',
    name: 'Ethan',
    position: 'Customer Assistance',
    salary: 5100,
  },
  {
    id: '4',
    name: 'Abby',
    position: 'Java Developer',
    salary: 7390,
  },
]

export default function EmployeeTable() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [salary, setSalary] = useState(0)
  const [newEmployees, setNewEmployees] = useState(employees)

  function handleName(event) {
    setName(event.target.value)
  }

  function handlePosition(event) {
    setPosition(event.target.value)
  }

  function handleSalary(event) {
    setSalary(event.target.value)
  }

  function handleAdd() {
    setNewEmployees((currentEmployees) => [
      ...currentEmployees,
      {
        id: (currentEmployees.length + 1).toString(),
        name: name,
        position: position,
        salary: salary,
      },
    ])
    setName('')
    setPosition('')
    setSalary(0)
  }

  function handleSalaryUpdate(id, newSalary) {
    setNewEmployees((currentEmployees) =>
      currentEmployees.map((employee) =>
        employee.id === id ? {...employee, salary: newSalary} : employee
      )
    )
  }

  return (
    <>
      <div>EmployeeTable</div>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {newEmployees.map((employee) => (
            <Employee
              key={employee.id}
              employee={employee}
              onSalaryUpdate={handleSalary}
            />
          ))}
          <tr>
            <th scope="row">
              <input
                placeholder="Enter Name..."
                value={name}
                onChange={handleName}
              />
            </th>
            <td>
              <input
                placeholder="Enter Position..."
                value={position}
                onChange={handlePosition}
              />
            </td>
            <td>
              <input
                placeholder="Enter Salary..."
                value={salary}
                onChange={handleSalary}
              />
            </td>
            <td>
              <button onClick={handleAdd}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
