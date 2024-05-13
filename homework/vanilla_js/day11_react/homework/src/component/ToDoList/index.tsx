import React, {useRef, useState} from 'react';
import './index.css'
import ListItem from '../ListItem/index.tsx';

interface TodoItem {
  id: number;
  text: string;
}

export default function ToDoList() {
  const userInput = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState<TodoItem[]>([]);
  const deleteItem = (id: number) => {
    setState(state.filter(item => item.id !== id));
  };
  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (userInput.current?.value) {
      const newItem: TodoItem = {
        id: Date.now(), // or some other unique identifier
        text: userInput.current.value
      };
      console.log('state before add item', state);
      setState(prevState => [...prevState, newItem]);
      console.log('state after add item', state);
      userInput.current.value = '';
    }
  }
  return (
    <div className='container'>
        <header className="header">To Do List</header>
        <form className="todoForm"> 
        <input type="text" className="todoInput" ref={userInput}/>
            <button className="submitBtn" type="submit" onClick={addItem}>+</button>
        </form>
        <ul id="present">
        {state.map(listItem => {
          return <ListItem key={listItem.id} listItem={listItem} deleteItem={deleteItem} />;
        })}
        </ul>
    </div>
  );
}
