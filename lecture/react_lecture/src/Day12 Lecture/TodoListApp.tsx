import { FormEvent, useState } from "react";

interface TodoType {
  id: number;
  task: string;
  completed: boolean;
}

const initialTodos = [
  { id: 1, task: "cook", completed: false },
  { id: 2, task: "play", completed: true },
];

export default function TodoListApp() {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newId = todos[todos.length - 1].id + 1;

    const newTodo: TodoType = {
      id: newId,
      task: newTask,
      completed: false,
    };
    // console.log("todos", todos);

    setTodos([...todos, newTodo]);
    // console.log(todos);
  };

  const handleToggleComplete = (id: number) => {
    const _todos = [...todos];
    const todo = _todos.find((todo) => todo.id === id);
    todo!.completed = !todo!.completed;
    setTodos(_todos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleToggle={handleToggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}

interface TodoProps {
  todo: TodoType;
  handleToggle: (id: number) => void;
}

function Todo({ todo, handleToggle }: TodoProps) {
  const { id, task, completed } = todo;

  return (
    <li>
      <Checkbox
        checked={completed}
        onChange={() => {
          handleToggle(id);
        }}
      />
      <div>Task: {task}</div>
      <div>Status: {completed ? "completed" : "incomplete"}</div>
    </li>
  );
}

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label?: string;
}

function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
