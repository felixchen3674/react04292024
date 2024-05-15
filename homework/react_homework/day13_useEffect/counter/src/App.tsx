import {useState, useEffect} from "react"

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(
    function () {
      let timerId: NodeJS.Timeout
      if (isRunning) {
        timerId = setInterval(() => {
          setCount((c) => c + 1)
        }, 1000)
      }

      // clear side effect
      return () => {
        clearInterval(timerId)
      }
    },
    [isRunning],
  )

  function handleStart() {
    setIsRunning(true)
  }

  function handlePause() {
    setIsRunning(false)
  }

  function handleReset() {
    setIsRunning(false)
    setCount(0)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
