import React, { useState, ChangeEvent } from 'react';
export default function Checkbox() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Label
      </label>
      <p>{isChecked ? 'Checked' : 'Not Checked'}</p>
    </div>
  );
}
