import React, { FormEvent, MouseEvent, useState } from "react";

export default function Input() {
  const [value, setValue] = useState<string>("apple");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(value);

    //never use dom manipulation in react
    // console.log((document.getElementById("input") as HTMLInputElement).value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="button" onClick={handleClick}>
        Normal Click
      </button>
      <button type="submit">Submit Button</button>
    </form>
  );
}
