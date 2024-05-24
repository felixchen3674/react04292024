export const addTodo = (name:string) => ({
    type: 'ADD_TODO',
    payload: { name },
  });
  
  export const toggleTodo = (id:number) => ({
    type: 'TOGGLE_TODO',
    payload: { id },
  });
  
  export const deleteTodo = (id:number) => ({
    type: 'DELETE_TODO',
    payload: { id },
  });