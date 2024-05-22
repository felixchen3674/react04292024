import React, { createContext, useReducer, useContext, useEffect } from 'react';

export const TaskContext = createContext<TaskContextProps | null>(null);

const initialState = {
  tasks: [],
  loading: true,
  error: null,
};
let nextId = 4;
interface Task {
  id: number;
  text: string;
  done: boolean;
}
interface State {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: string;
  payload?: any;
}

interface TaskContextProps {
  state: State;
  addTask: (text: string) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
}

function tasksReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    }

    fetchTasks();
  }, []);

  const addTask = async (text: string) => {
    const newTask = { id: nextId++, text, done: false };
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      dispatch({ type: 'ADD_TASK', payload: data });
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const updateTask = async (task: Task) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      dispatch({ type: 'UPDATE_TASK', payload: data });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      });
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ state, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}
