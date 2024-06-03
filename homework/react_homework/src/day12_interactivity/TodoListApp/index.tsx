import {useState} from 'react'

export default function TodoListApp() {
  // write your todo list app here
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  function addTodo() {
    if (newTodo.trim() === '') {
      return
    }

    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      completed: false,
    }

    setTodos((todos) => [...todos, newTodoItem])
    setNewTodo('')
  }

  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <h2>TodoListApp</h2>
      <input
        type="text"
        placeholder="add new..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
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
