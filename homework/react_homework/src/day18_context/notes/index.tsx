import { useState, createContext, useContext, useReducer } from "react";
import Todo from "./Todo";

// const AppContext = createContext(null);

// export const Parent = () => {
//     const [userName, setUserName] = useState("Anthony");

//     return (
//         <AppContext.Provider value={{userName, setUserName}}>
//             <div>
//                 {userName}
//                 <Child />
//             </div>
//         </AppContext.Provider>
//     )
// }

// export const Child = () => {
//     return <Grandchild />;
// };

// export const Grandchild = () => {
//     const { setUserName } = useContext(AppContext)
//     return(
//         <div>
//             <button onClick={()=>{
//                 setUserName("AnthonyShin")
//             }}>
//                 Change Username
//             </button>
//         </div>
//     );
// };
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo"
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo=>{
        if(todo.id === action.payload.id){
            return {...todo, complete: !todo.complete}
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo=>todo.id !== action.payload.id)
      default: 
        return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function CountingStar() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

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
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
      })}
    </>
  );
}

export default CountingStar;
