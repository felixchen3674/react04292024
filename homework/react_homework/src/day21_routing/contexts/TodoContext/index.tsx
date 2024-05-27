import { createContext, useEffect, useReducer } from "react";
import {
  addToDoAction,
  deleteToDoAction,
  toDoReducer,
  updateToDoAction,
} from "../../reducer";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../../constants";

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const TodoContext = createContext(undefined);

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toDoReducer, { todos: [] });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        data.forEach((todo) => {
          dispatch({ type: ADD_TODO, payload: todo });
        });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (task, description) => {
    const newTodo = {
      task,
      completed: false,
      date: getCurrentDate(),
      description,
    };

    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (response.ok) {
      const savedTodo = await response.json();
      dispatch(addToDoAction(savedTodo));
    }
  };

  const updateTodo = async (updatedTodo) => {
    const response = await fetch(
      `http://localhost:3000/todos/${updatedTodo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      }
    );

    if (response.ok) {
      dispatch(updateToDoAction(updatedTodo));
    }
  };

  const deleteTodo = async (id: string) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch(deleteToDoAction(id));
    } else {
      console.error(`Failed to delete todo with id ${id}`);
    }
  };

  return (
    <TodoContext.Provider value={{ state, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
