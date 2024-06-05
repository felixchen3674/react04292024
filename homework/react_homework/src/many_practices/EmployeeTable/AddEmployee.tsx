import React, { useState } from "react";

export default function AddEmployee({ employees, setEmployees }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const enableStatus =
    name.trim() === "" || position.trim() === "" || salary.trim() === "";

  const handleAddEmployee = () => {
    const id = employees.length + 1;
    const newEmployee = {
      id,
      name,
      position,
      salary,
    };
    setEmployees((pre) => [...pre, newEmployee]);
    setName("");
    setPosition("");
    setSalary("");
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </td>
      <td>
        <input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          min={0}
          onChange={(e) => setSalary(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handleAddEmployee} disabled={enableStatus}>
          Add
        </button>
      </td>
    </tr>
  );
}
