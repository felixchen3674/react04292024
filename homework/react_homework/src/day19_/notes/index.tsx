import { Provider } from "react-redux";

import TodoAppWRedux from "./todowithredux/TodoAppWRedux";

import React from "react";
import store from "./todo-redux/redux/store";
import ToDoRApp from "./todo-redux/ToDoRApp";

export default function Day19Play() {
  return (
    <div>
      <h1>Day 19 Play</h1>
      {/* <Provider store={store}>
        <TodoAppWRedux />
      </Provider> */}
      <Provider store={store}>
        <ToDoRApp />
      </Provider>
    </div>
  );
}
