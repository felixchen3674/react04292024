import React, { useState, useEffect } from 'react';

export default function CounterTimer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setIsRunning(true);
        }}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
        }}
        disabled={!isRunning}
      >
        Pause
      </button>
      <button
        onClick={() => {
          setIsRunning(false);
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
