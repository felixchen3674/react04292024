import {useState} from "react"

interface TodoItem {
  id: number
  text: string
}

export default function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [nextId, setNextId] = useState<number>(1)

  const handleAddTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: nextId,
      text,
    }
    setTodos((todos) => [...todos, newTodo])
    setNextId((nextId) => nextId + 1)
  }

  function handleDeleteTodo(id: number): void {
    setTodos((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ShowTodo todos={todos} onDeleteTodo={handleDeleteTodo} />
      <CheckBox />
      <RadioGroup />
      <SelectAndOptions />
    </div>
  )
}

function AddTodo({
  onAddTodo,
}: {
  onAddTodo: (text: string) => void
}): JSX.Element {
  const [inputValue, setInputValue] = useState("")

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.target.value)
  }

  function handleClick(): void {
    if (inputValue.trim() !== "") {
      onAddTodo(inputValue)
      setInputValue("")
    }
  }

  return (
    <div>
      <input
        placeholder="add item..."
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

function ShowTodo({
  todos,
  onDeleteTodo,
}: {
  todos: TodoItem[]
  onDeleteTodo: (id: number) => void
}): JSX.Element {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{" "}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>{" "}
          <button>Edit</button>
        </li>
      ))}
    </ul>
  )
}

function CheckBox(): JSX.Element {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>Label</label>
      <p>Label is checked: {isChecked.toString()}</p>
    </div>
  )
}

function RadioGroup(): JSX.Element {
  const [grouped, setGrouped] = useState("Female")

  const handleRadioGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrouped(e.target.value)
  }

  return (
    <div>
      <p>Gender</p>
      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={grouped === "Female"}
          onChange={handleRadioGroupChange}
        />
        Female
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={grouped === "Male"}
          onChange={handleRadioGroupChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Other"
          checked={grouped === "Other"}
          onChange={handleRadioGroupChange}
        />
        Other
      </label>
      <p>Selected: {grouped}</p>
    </div>
  )
}

function SelectAndOptions() {
  return (
    <div>
      <form>
        <label>Age:</label>
        <br />
        <select>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </form>
    </div>
  )
}
