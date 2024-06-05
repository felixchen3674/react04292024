import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { add_employee, edit_disabled, edit_salary } from "./reducer";
import "./index.css";
import UserInput from "./components/UserInput";

export default function EmployeeTable() {
  const [inputName, setInputName] = useState<string>("");
  const [inputPosition, setInputPosition] = useState<string>("");
  const [inputSalary, setInputSalary] = useState<string>("");
  const [isAddDisabled, setIsAddDisabled] = useState<boolean>(true);
  const [choosingId, setChoosingId] = useState<number | null>(null);
  const [editSalary, setEditSalary] = useState<string>("");
  const employeeTable = useSelector(
    (rootReducer: RootState) => rootReducer.employeeTable
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setIsAddDisabled(
      !(
        inputName.trim() !== "" &&
        inputPosition.trim() !== "" &&
        inputSalary.trim() !== ""
      )
    );
  }, [inputName, inputPosition, inputSalary]);

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleInputPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPosition(e.target.value);
  };

  const handleInputSalary = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSalary(e.target.value);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee = {
      id: employeeTable.length + 1,
      name: inputName,
      position: inputPosition,
      salary: inputSalary,
      isDisabled: true,
    };
    dispatch(add_employee(newEmployee));
    setInputName("");
    setInputPosition("");
    setInputSalary("");
  };

  const handleSalaryClick = (id: number, salary: string) => {
    setChoosingId(id);
    setEditSalary(salary);
    dispatch(edit_disabled(id)); // Enable editing
  };

  const handleEditSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditSalary(e.target.value);
  };

  const handleSaveSalary = () => {
    if (choosingId !== null) {
      dispatch(edit_salary(choosingId, editSalary));
      dispatch(edit_disabled(choosingId)); // Disable editing
      setChoosingId(null);
      setEditSalary("");
    }
  };

  return (
    <form>
      <table className="employee-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Position</td>
            <td>Salary</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {employeeTable.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>
                {choosingId !== employee.id ? (
                  <span
                    onClick={() =>
                      handleSalaryClick(employee.id, employee.salary)
                    }
                  >
                    {employee.salary}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={editSalary}
                    onChange={handleEditSalaryChange}
                    onBlur={handleSaveSalary}
                    autoFocus
                  />
                )}
              </td>
              <td>
                <button
                  onClick={handleSaveSalary}
                  disabled={employee.isDisabled}
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <UserInput
              placeholder={"Name"}
              value={inputName}
              onChange={handleInputName}
            />
            <UserInput
              placeholder={"Position"}
              value={inputPosition}
              onChange={handleInputPosition}
            />
            <UserInput
              placeholder={"Salary"}
              value={inputSalary}
              onChange={handleInputSalary}
            />
            <td>
              <button onClick={handleAdd} disabled={isAddDisabled}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
