import React, { useState } from "react";

export default function Toggle() {
  const [isShown, setIsShown] = useState(false);

  const toggleVisibility = () => {
    // do not recommend this
    // setIsShown(!isShown);

    setIsShown((prev) => !prev);
  };

  return (
    <div>
      <h2>Some information</h2>
      <div>
        <button onClick={toggleVisibility}>{isShown ? "Hide" : "Show"}</button>
        <div>{isShown && "secret"}</div>
      </div>
    </div>
  );
}
