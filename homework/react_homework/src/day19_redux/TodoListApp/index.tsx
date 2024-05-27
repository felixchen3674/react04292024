import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTodo from './components/AddTodo';
import HooksAddTodo from './components/HooksAddTodo';

export default function TodoListApp() {
  return (
    <Provider store={store}>
      <div>TodoListApp</div>
      {/* <AddTodo /> */}
      <HooksAddTodo />
    </Provider>
  );
}
