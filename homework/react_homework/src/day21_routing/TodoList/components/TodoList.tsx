import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../TodoContext';

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);
  const [task, setTask] = useState<string>('');

  if (!todoContext) {
    return null;
  }

  const { todos, addTodo } = todoContext;

  const handleAddTodo = () => {
    const newTodo = {
      Id: todos.length + 1,
      task: task,
      completed: false,
      date: new Date().toISOString().split('T')[0],
      description: '',
    };
    addTodo(newTodo);
    setTask('');
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.Id}>
            <Link to={`/todos/${todo.Id}`}>
              {todo.task} - {todo.completed ? 'Completed' : 'Not Completed'}
            </Link>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
