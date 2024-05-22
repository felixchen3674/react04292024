import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  SET_TODOS: "set-todos",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    case ACTIONS.SET_TODOS:
      return action.payload
    default: 
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function TodoList18() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TODOS, payload: data });
    };

    fetchTodos();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TodoList18;
