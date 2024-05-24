import { ADD_TODO, DELETE_TODO, TodoActionTypes, TodoState } from './todoTypes';

const initialState: TodoState = [
  { id: 1, task: 'React homework', status: 'done' },
  { id: 2, task: 'Redux homework', status: 'not done' },
  { id: 3, task: 'Typescript homework', status: 'done' },
];

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.payload,
          status: 'not done',
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
