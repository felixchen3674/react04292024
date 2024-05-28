export const TodoReducer = (state = {todos: []}, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return {todos: action.payload}

    case "ADD_TODO":
      return {todos: action.payload}

    case "REMOVE_TODO":
      return {todos: action.payload}

    default:
      return state
  }
}
