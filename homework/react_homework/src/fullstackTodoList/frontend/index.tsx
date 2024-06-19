import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import NoMatch from './components/NoMatch';
import { TodoProvider } from './context/TodoContext';

function FTodoListApp() {
  return (
    <TodoProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/todo/:id" component={TodoItem} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </TodoProvider>
  );
}

export default FTodoListApp;
