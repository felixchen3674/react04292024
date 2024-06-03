import {useState} from 'react'

export default function CheckBox(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Label</label>
      <p>Label is checked: {isChecked.toString()}</p>
    </div>
  )
}
