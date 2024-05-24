import {Provider} from "react-redux"
import store from "../reactTodos/store"
import TodoListApp from "../reactTodos/TodoListApp"

export default function Day19Play() {
  return (
    <div>
      <Provider store={store}>
        <TodoListApp />
      </Provider>
    </div>
  )
}
