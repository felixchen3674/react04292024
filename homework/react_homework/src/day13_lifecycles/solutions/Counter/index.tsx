import React, { useState, useRef } from 'react'

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [startDisabled, setStartDisabled] = useState<boolean>(false);
  const [pauseDisabled, setPauseDisabled] = useState<boolean>(true);
  const intervalRef = useRef(null);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    setStartDisabled(true);
    setPauseDisabled(false);
  }

  const handlePause = () => {
    clearInterval(intervalRef.current);
    setStartDisabled(false);
    setPauseDisabled(true);
  }

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setCount(0);
    setStartDisabled(false);
    setPauseDisabled(true);
  }

  return (
    <div>
        <p>{count}</p>
        <button disabled={startDisabled} onClick={handleStart}>Start</button>
        <button disabled={pauseDisabled} onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
