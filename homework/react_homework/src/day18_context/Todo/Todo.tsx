import React from 'react';

interface TodoProps {
  todo: {
    id: number;
    name: string;
    complete: boolean;
  };
  handleToggle: (id: number) => void;
  handleDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, handleToggle, handleDelete }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={() => handleToggle(todo.id)}>Completed?</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;