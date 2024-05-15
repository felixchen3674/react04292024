import { useState, ChangeEvent } from "react"

export default function Select() {
  const [selectedValue, setSeletedValue] = useState<string>('');
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSeletedValue(e.target.value);
  };
  return (
    <div>
      <form>
        <select value={selectedValue}
                onChange={handleSelectChange}>
                  <option value="" disabled>Age</option>
                  <option value="option1">Ten</option>
                  <option value="option2">Twenty</option>
                  <option value="option3">Thrity</option>
        </select>
      </form>
    </div>
  )
}
