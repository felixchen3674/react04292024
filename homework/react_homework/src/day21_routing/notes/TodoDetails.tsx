import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function TodoDetails() {
  const {id} = useParams()
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTodo(data))
      .catch((error) => console.error('Error fetching todo details:', error))
  }, [id])

  if (!todo) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Todo Details</h2>
      <p>ID: {todo.id}</p>
      <p>Text: {todo.text}</p>
      <p>Status: {todo.completed ? '😇 Completed' : '❌ Not Completed'}</p>
    </div>
  )
}
