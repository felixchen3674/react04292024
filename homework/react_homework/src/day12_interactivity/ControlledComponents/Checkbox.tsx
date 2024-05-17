import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  value: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  value,
  isChecked,
  onChange,
}: CheckboxProps) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {value}
      </label>
    </div>
  );
}
