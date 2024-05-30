import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TodoList from "../TodoList";
import TodoDetails from "../TodoDetails";

export default function Day24() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/todos/:id" component={TodoDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
