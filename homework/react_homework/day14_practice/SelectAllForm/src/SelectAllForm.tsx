import {useState} from "react"

const items = [
  {id: 1, label: "item1", checked: false},
  {id: 2, label: "item2", checked: false},
  {id: 3, label: "item3", checked: false},
]
export function SelectAllForm() {
  const [selectedAll, setSelectedAll] = useState(false)
  const [checkboxes, setCheckboxes] = useState(items)

  function handleSelectAll() {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectedAll,
    }))
    setCheckboxes(updatedCheckboxes)
    setSelectedAll(!selectedAll)
  }

  function handleCheckbox(id: number) {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? {...checkbox, checked: !checkbox.checked}
          : checkbox
      )
    )
  }

  return (
    <div>
      <h2>All the selected items</h2>
      <p>
        {checkboxes.map((checkbox) =>
          checkbox.checked ? checkbox.label + ", " : ""
        )}
      </p>
      <label>
        <input
          type="checkbox"
          checked={selectedAll}
          onChange={handleSelectAll}
        />{" "}
        Select all
      </label>

      <ul style={{listStyleType: "none"}}>
        {checkboxes.map((checkbox) => (
          <li key={checkbox.id}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckbox(checkbox.id)}
            />{" "}
            {checkbox.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
