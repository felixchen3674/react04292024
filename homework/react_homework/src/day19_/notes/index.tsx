import { Provider } from "react-redux";
import store from "./todowithredux/redux/store";
import TodoAppWRedux from "./todowithredux/TodoAppWRedux";

export default function Day19Play() {
  return (
    <div>
      <h1>Day 19 Play</h1>
      <Provider store={store}>
        <TodoAppWRedux />
      </Provider>
    </div>
  );
}
