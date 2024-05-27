import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TodoProvider } from './TodoContext';
import TodoList from './components/TodoList';
import TodoDetails from './components/TodoDetails';

const TodoListApp: React.FC = () => {
  return (
    <TodoProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/todos/:id" component={TodoDetails} />
        </Switch>
      </Router>
    </TodoProvider>
  );
};

export default TodoListApp;
