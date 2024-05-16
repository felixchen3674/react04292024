// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState<number>(0);
//   const [isStart, setIsStart] = useState<boolean>(false);
//   const [isPause, setIsPause] = useState<boolean>(true);
//   const [interalId, setIntervalId] = useState();
//   const handleStart = () => {
//     setIsStart(true);
//     setIsPause(false);
//     setIntervalId(setInterval(() => setCount((pre) => pre + 1), 1000));
//   };
//   const handlePause = () => {
//     setIsStart(false);
//     setIsPause(true);
//     clearInterval(interalId);
//   };
//   const handleReset = () => {
//     setCount(0);
//     clearInterval(interalId);
//     setIsStart(true);
//     setIsPause(false);
//   };

//   return (
//     <div>
//       <h1>Counter:{count}</h1>
//       <div>
//         <button disabled={isStart} onClick={handleStart}>
//           Start
//         </button>
//         <button disabled={isPause} onClick={handlePause}>
//           Pause
//         </button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
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
