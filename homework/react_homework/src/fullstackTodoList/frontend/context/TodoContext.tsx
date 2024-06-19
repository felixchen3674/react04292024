import React, { createContext, useEffect, useState } from 'react';

interface Todo {
  _id: string;
  task: string;
  completed: string;
  date: Date;
}
const URL = 'http://localhost:5000';
const TodoContext = createContext(undefined);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(`${URL}/todos`);
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
