import { ChangeEvent, FormEvent, useState } from 'react';
import './index.css';
interface ToDo {
  id: number;
  task: string;
  isEditing: boolean;
}
export default function TodoListApp() {
  // write your todo list app here
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingTask, setEditingTask] = useState<string>('');

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTodos([...todos, { id: Date.now(), task: newTask, isEditing: false }]);
    setNewTask('');
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTask = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleUpdateTask = (id: number, newTask: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleEditingInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditingTask(e.target.value);
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <input
                type="text"
                defaultValue={todo.task}
                onChange={handleEditingInputChange}
                onBlur={() => handleUpdateTask(todo.id, editingTask)}
              />
            ) : (
              <span>{todo.task}</span>
            )}
            <button onClick={() => handleEditTask(todo.id)}>
              {todo.isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
