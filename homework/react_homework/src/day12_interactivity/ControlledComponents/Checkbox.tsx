import { useState } from "react";

interface CheckboxProps {
  label: string;
  defaultChecked?: boolean; 
  onChange: (checked: boolean) => void;
}

export default function Checkbox({
  label,
  defaultChecked = false,
  onChange,
}: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
}
