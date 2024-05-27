import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { TodoContext } from '../TodoContext';

interface Params {
  id: string;
}

const TodoDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const history = useHistory();
  const todoContext = useContext(TodoContext);
  const [todo, setTodo] = useState<any>(null);

  if (!todoContext) {
    return null;
  }

  const { todos, updateTodo, deleteTodo } = todoContext;

  useEffect(() => {
    const foundTodo = todos.find((t) => t.Id === parseInt(id));
    setTodo(foundTodo);
  }, [id, todos]);

  const handleUpdateTodo = () => {
    updateTodo(todo);
    history.push('/');
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.Id);
    history.push('/');
  };

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Todo Details</h1>
      <p>Task: {todo.task}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>Date: {todo.date}</p>
      <p>Description: {todo.description}</p>
      <button onClick={() => history.push('/')}>Back to List</button>
      <button onClick={handleDeleteTodo}>Delete</button>
      <button onClick={handleUpdateTodo}>Update</button>
    </div>
  );
};

export default TodoDetails;
