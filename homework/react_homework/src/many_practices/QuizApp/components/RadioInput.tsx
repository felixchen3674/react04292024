import React from 'react';

interface RadioInputProps {
  option: string;
  id: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

export default function RadioInput({
  option,
  id,
  handleChange,
  selectedOption,
}: RadioInputProps) {
  return (
    <div>
      <input
        type="radio"
        id={`option${id}`}
        name="quiz"
        value={option}
        checked={selectedOption === option}
        onChange={handleChange}
      />
      <label htmlFor={`option${id}`}>{option}</label>
    </div>
  );
}
