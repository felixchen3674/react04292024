import React, { useState } from "react";
import AddEmployee from "./AddEmployee";

export default function Employee({ employees, setEmployees }) {
  const [editID, setEditID] = useState("");
  const [editSalary, setEditSalary] = useState("");
  const handleSave = (id) => {
    const newEmployees = employees.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, salary: editSalary };
        return newItem;
      } else {
        return item;
      }
    });
    setEmployees(newEmployees);
    setEditID("");
    setEditSalary("");
  };

  return (
    <tbody>
      {employees &&
        employees.map((item) => {
          const { id, name, position, salary } = item;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{position}</td>
              <td onClick={() => setEditID(id)}>
                {editID === id ? (
                  <input
                    type="number"
                    min={0}
                    value={editSalary}
                    onChange={(e) => setEditSalary(e.target.value)}
                  />
                ) : (
                  salary
                )}
              </td>
              <td>
                <button disabled={editID !== id} onClick={() => handleSave(id)}>
                  Save
                </button>
              </td>
            </tr>
          );
        })}
      <AddEmployee employees={employees} setEmployees={setEmployees} />
    </tbody>
  );
}
