import { useState } from "react"

export default function RadioGroup() {
  const [selected, setSelected] = useState('');



  const handleChange = (event : any) => {
    setSelected(event.target.value);
  };

  return (
    <div className="radio">
      <div>
        <input type="radio" id="female" value="Female" checked={selected === "Female" } 
        onChange={handleChange} />
        <span>Female</span>
      </div>
      <div>
        <input type="radio" id="male" value="Male" checked={selected === "Male" } 
          onChange={handleChange} />
        <span>Male</span>
      </div>
      <div>
        <input type="radio" id="other" value="Other" checked={selected === "Other" } 
          onChange={handleChange} />
        <span>Other</span>
      </div>
    </div>
  )
}
