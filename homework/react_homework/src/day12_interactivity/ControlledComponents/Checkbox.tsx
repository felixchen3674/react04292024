import React, { useState, ChangeEvent } from 'react';

export default function Checkbox() {
  const [inputValue, setInputValue] = useState<boolean>(false);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.checked);
  };

  return (
    <div>
      <form>
          <input
            type="checkbox"
            checked={inputValue}
            onChange={handleCheckboxChange}
          />
          Checkbox
      </form>
    </div>
  );
}
