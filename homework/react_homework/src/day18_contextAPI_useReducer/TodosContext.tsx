import {createContext, useContext, useEffect, useReducer} from 'react'

const TodosContext = createContext()

const URL = 'http://localhost:3000/todos'

function todosReducer(state, action) {
  switch (action.type) {
    case 'SET_TODOS':
      return action.payload
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload)
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

function TodosProvider({children}) {
  const [state, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => dispatch({type: 'SET_TODOS', payload: data}))
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <TodosContext.Provider value={{todos: state, dispatch}}>
      {children}
    </TodosContext.Provider>
  )
}

function useTodos() {
  const context = useContext(TodosContext)
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodosProvider')
  }
  return context
}

export {TodosProvider, useTodos}
