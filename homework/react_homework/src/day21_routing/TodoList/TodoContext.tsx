import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Todo {
  Id: number;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (todo: Todo) => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((newTodo) => setTodos([...todos, newTodo]));
  };

  const updateTodo = (updatedTodo: Todo) => {
    fetch(`http://localhost:3000/todos/${updatedTodo.Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => response.json())
      .then((data) =>
        setTodos(
          todos.map((todo) => (todo.Id === updatedTodo.Id ? data : todo))
        )
      );
  };

  const deleteTodo = (id: number) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: 'DELETE',
    }).then(() => setTodos(todos.filter((todo) => todo.Id !== id)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
