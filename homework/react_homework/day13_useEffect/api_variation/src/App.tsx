import {useEffect, useState} from "react"
import "./App.css"

const URL = "https://jsonplaceholder.typicode.com/posts/"

interface PostData {
  userId: number
  id: number
  title: string
  body: string
}

function App() {
  const [id, setId] = useState(1)
  const [postData, setPostData] = useState<PostData | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(
    function () {
      let intervalId: NodeJS.Timeout

      if (isRunning) {
        intervalId = setInterval(() => {
          setId((i) => i + 1)
        }, 10000)
      }

      return () => {
        clearInterval(intervalId)
      }
    },
    [isRunning, setId],
  )

  useEffect(
    function () {
      fetch(`${URL}${id.toString()}`)
        .then((res) => res.json())
        .then((data) => setPostData(data))
        .catch((error) => console.error("Error", error))
    },
    [id],
  )

  function handleIsRunning() {
    setIsRunning(true)
  }

  return (
    <>
      <h1>Day 13 Homework</h1>
      <button onClick={handleIsRunning} disabled={isRunning}>
        Start
      </button>
      {postData && (
        <div>
          <h2>Post ID: {postData.id}</h2>
          <h3>Title: {postData.title}</h3>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </>
  )
}

export default App
