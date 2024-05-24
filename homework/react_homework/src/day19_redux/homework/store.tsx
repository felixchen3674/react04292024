import { createStore } from 'redux';
import todosReducer from './redux/todosReducers';

const store = createStore(todosReducer);

export default store;