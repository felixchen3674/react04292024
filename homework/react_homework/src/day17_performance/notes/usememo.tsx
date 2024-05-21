import React, { useState, useMemo, useEffect } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [dark, setDark] = useState<boolean>(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // use usememo to memorize the slowfunction result, so that whenever it re-render, if no change for the dependency number, the function won't run again

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Change");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num: number): number {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
