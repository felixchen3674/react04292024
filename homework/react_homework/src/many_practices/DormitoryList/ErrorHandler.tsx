import React, { useContext } from "react";
import { dormContext } from "./dormContext";

export default function ErrorHandler() {
  const { handleOnChange, error } = useContext(dormContext);
  return (
    <div className="errorContainer">
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={handleOnChange}>x</button>
        </div>
      )}
    </div>
  );
}
