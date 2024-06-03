import {useState} from 'react'

export default function RadioGroup(): JSX.Element {
  const [grouped, setGrouped] = useState('Female')

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrouped(e.target.value)
  }

  return (
    <div>
      <p>Gender</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={grouped === 'Female'}
          onChange={handleRadioGroupChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={grouped === 'Male'}
          onChange={handleRadioGroupChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={grouped === 'Other'}
          onChange={handleRadioGroupChange}
        />
        Other
      </label>
      <p>Selected: {grouped}</p>
    </div>
  )
}
