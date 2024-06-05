import React from "react";

interface UserInputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UserInput({
  placeholder,
  value,
  onChange,
}: UserInputProps) {
  return (
    <td>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </td>
  );
}
