import React, { useState } from "react";
import Employee from "./Employee";
import { employeesList, employeesType } from "./EmployeeList";

export default function EmployeeTable() {
  const [employees, setEmployees] = useState<employeesType[]>(employeesList);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Position</td>
            <td>Salary</td>
            <td>Action</td>
          </tr>
        </thead>
        <Employee employees={employees} setEmployees={setEmployees} />
      </table>
    </div>
  );
}
