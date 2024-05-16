import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  }
  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span>{ checked ? "checked" : "unchecked" }</span>
    </div>

  );
  
}
