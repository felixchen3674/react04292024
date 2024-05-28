import { BrowserRouter, Link, Route, Router, Switch } from "react-router-dom";
import Home from "./todoWRouter/components/Home";
import SingleTodo from "./todoWRouter/components/SingleTodo";
import customHistory from "./todoWRouter/components/customerHistory";

export default function ToDoApp() {
  return (
    <div>
      <h1>TO DO APP</h1>
      <Router history={customHistory}>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/todo/:id"} component={SingleTodo} />
        </Switch>
      </Router>
    </div>
  );
}
