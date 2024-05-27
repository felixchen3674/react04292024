import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TodoState, Todo } from '../redux/todoitems/todoTypes';
import { addTodo } from '../redux/todoitems/todoActions';

const mapStateToProps = (state: TodoState) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = {
  addTodo,
};

interface AddTodoProps {
  todos: Todo[];
  addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ todos, addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div>
      <h1>AddTodo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
const ConnectedAddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default ConnectedAddTodo;
