import { useState } from "react"

export default function Select() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event : any) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleChange}>
      <option value="">Age</option>
        <option value="Ten">Ten</option>
        <option value="Twenty">Twenty</option>
        <option value="Thirty">Thirty</option>
      </select>
    </div>
  )
}
