import {createContext, useContext, useEffect, useState} from 'react'

const TodosContext = createContext()

const URL = 'http://localhost:3000/todos'

function TodosProvider({children}) {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <TodosContext.Provider value={{todos, setTodos}}>
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
