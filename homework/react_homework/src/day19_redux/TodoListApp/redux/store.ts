import { createStore } from 'redux';
import todoReducer from './todoitems/todoReducer';

const store = createStore(todoReducer);

export default store;
