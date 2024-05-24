// Day19.tsx
import { Provider } from "react-redux";
import store from "../store"; // Import your Redux store
import TodoListApp from "../container/TodoListApp";
import "../styles/theme.css";

export default function Day19() {
  return (
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  );
}
