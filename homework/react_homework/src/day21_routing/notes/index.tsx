import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import TodoDetails from "../components/TodoDetails";

// set up your routes here
export default function Day21Play() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/todos/:id" component={TodoDetails} />
      </Switch>
    </Router>
  );
}
