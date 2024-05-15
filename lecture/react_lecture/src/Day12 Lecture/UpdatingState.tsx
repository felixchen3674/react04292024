import { FormEvent, useState } from "react";

interface Todo {
  id: number;
  task: string;
}

export default function UpdatingState() {
  const [todos, setTodos] = useState<Todo[]>([{ id: 1, task: "cook" }]);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newId = todos[todos.length - 1].id + 1;

    const newTodo = {
      id: newId,
      task: newTask,
    } as Todo;
    // console.log("todos", todos);

    setTodos([...todos, newTodo]);
    // console.log(todos);
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
            <li key={todo.id}>
              <div>{todo.task}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
