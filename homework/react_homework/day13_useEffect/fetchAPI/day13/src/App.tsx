import React from "react"
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

  useEffect(
    function () {
      fetch(`${URL}${id.toString()}`)
        .then((res) => res.json())
        .then((data) => setPostData(data))
        .catch((error) => console.error("Error", error))
    },
    [id],
  )

  function handleId() {
    setId(id + 1)
  }

  return (
    <>
      <h1>Day 13 Homework</h1>
      <button onClick={handleId}>next id</button>
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
