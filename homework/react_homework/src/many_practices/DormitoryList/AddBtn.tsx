import React, { useContext } from "react";
import { dormContext } from "./dormContext";

export default function AddBtn() {
  const { handleOnclick } = useContext(dormContext);
  return (
    <div className="btnContainer">
      <button onClick={handleOnclick}> Add</button>
    </div>
  );
}
