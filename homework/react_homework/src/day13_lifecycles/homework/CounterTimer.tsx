import React, { useState, useEffect } from "react";

function CounterTimer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CounterTimer;
