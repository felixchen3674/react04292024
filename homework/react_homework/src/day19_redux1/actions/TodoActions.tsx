const URL = "http://localhost:3000/todos"

export const FetchTodosAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const todos = await response.json()
      dispatch({type: "FETCH_TODOS_SUCCESS", payload: todos})
    } catch (error) {
      console.error("Error fetching todos:", error)
    }
  }
}

export const AddTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: {todos},
  } = getState()

  const hasTodo = todos.find((i) => i.todo === todo)

  if (!hasTodo && todo !== "") {
    dispatch({
      type: "ADD_TODO",
      payload: [...todos, {id: todo, todo}],
    })
  }
}

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
  const {
    Todo: {todos},
  } = getState()

  dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== todo.id),
  })
}
