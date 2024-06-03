import {useState} from 'react'
import {useTodos} from './TodosContext'

export default function TodoList() {
  const {todos, dispatch} = useTodos()
  const [newTodo, setNewTodo] = useState('')

  function addTodo() {
    if (newTodo.trim() === '') {
      return
    }

    const newTodoItem = {
      id: (todos.length + 2).toString(),
      text: newTodo,
      completed: false,
    }

    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodoItem),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: 'ADD_TODO', payload: data})
        setNewTodo('')
      })
      .catch((error) => console.error('Error adding todo:', error))
  }

  function deleteTodo(id) {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        dispatch({type: 'DELETE_TODO', payload: id})
      })
      .catch((error) => console.error('Error deleting todo:', error))
  }

  function handleTodoClick(id) {
    navigate(`/todos/${id}`)
  }

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleTodoClick(todo.id)}>
            {todo.text}{' '}
            {todo.completed ? (
              <span>😇 Completed</span>
            ) : (
              <span>❌ Not Completed</span>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation()
                deleteTodo(todo.id)
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
