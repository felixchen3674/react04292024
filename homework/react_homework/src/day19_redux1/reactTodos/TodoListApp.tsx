import {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {AddTodoAction, RemoveTodoAction} from "../actions/TodoActions"

const URL = "http://localhost:3000/todos"

export default function TodoListApp() {
  const [todo, setTodo] = useState()

  const dispatch = useDispatch()

  const Todo = useSelector((state) => state.Todo)
  const {todos} = Todo

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(AddTodoAction(todo))
  }

  function handleRemove(t) {
    dispatch(RemoveTodoAction(t))
  }

  return (
    <>
      <h2>Redux Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add a task..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos &&
          todos.map((t) => (
            <li key={t.id}>
              <span>{t.todo}</span>
              <button onClick={() => handleRemove(t)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  )
}
