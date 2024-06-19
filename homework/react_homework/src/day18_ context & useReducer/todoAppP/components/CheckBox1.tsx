import React from "react";

export default function CheckBox1({ checked, onChange }) {
  return (
    <label>
      completed:
      <input type="checkbox" checked={checked} onChange={onChange} />
    </label>
  );
}
