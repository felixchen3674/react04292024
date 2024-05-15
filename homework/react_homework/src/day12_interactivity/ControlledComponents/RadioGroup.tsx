import { ChangeEvent, useState } from "react"

export default function RadioGroup() {
  const [selectionValue, setSeletedValue] = useState<string>('');
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeletedValue(e.target.value)
  }
  return (
    <div>
      <h2>Select an Option</h2>
      <form>
        <input
          type="radio"
          value='option1'
          checked={selectionValue === 'option1'}
          onChange={handleRadioChange}
        />
        Female
        <input
          type="radio"
          value='option2'
          checked={selectionValue === 'option2'}
          onChange={handleRadioChange}
        />
        Male
        <input
          type="radio"
          value='option3'
          checked={selectionValue === 'option3'}
          onChange={handleRadioChange}
        />
        Other
      </form>
    </div>
  )
}
