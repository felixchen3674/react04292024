import React, { useContext } from "react";
import { todoContext } from "../ContextAPI/ItemContext";

export default function AddInput() {
  const { inputRef, handleAdd } = useContext(todoContext);
  return (
    <div>
      <div className="AddInput">
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
