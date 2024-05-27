import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./ReduxTodoSolution/redux/store.ts";
import {
  TodoContext,
  TodoProvider,
} from "./day21_routing/contexts/TodoContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
