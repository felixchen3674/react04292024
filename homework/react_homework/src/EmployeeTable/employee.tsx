import {useState, useRef} from 'react'

export default function Employee({employee, onSalaryUpdate}) {
  const [isEditing, setIsEditing] = useState(false)
  const [salary, setSalary] = useState(employee.salary)
  const [updatedSalary, setUpdatedSalary] = useState(salary)
  const inputRef = useRef(null) // Ref for input element

  function handleEditToggle() {
    setIsEditing(!isEditing)
    if (!isEditing) {
      setUpdatedSalary(salary) // Only set updatedSalary when entering edit mode
    }
  }

  function handleSave() {
    setSalary(updatedSalary)
    onSalaryUpdate(employee.id, updatedSalary)
    setIsEditing(false)
  }

  function handleInputFocus() {
    setIsEditing(true)
  }

  return (
    <tr>
      <th scope="row">{employee.name}</th>
      <td>{employee.position}</td>
      <td onClick={handleEditToggle}>
        {isEditing ? (
          <input
            type="number"
            value={updatedSalary}
            onChange={(event) =>
              setUpdatedSalary(parseInt(event.target.value, 10))
            }
            step="100"
            ref={inputRef} // Assign ref to input element
            onFocus={handleInputFocus} // Handle input focus event
          />
        ) : (
          salary
        )}
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
    </tr>
  )
}
