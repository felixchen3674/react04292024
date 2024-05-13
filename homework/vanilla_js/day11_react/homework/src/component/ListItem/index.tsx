import React from 'react'
import './index.css'

interface TodoItem {
  id: number;
  text: string;
}

interface ListItemProps {
  listItem: TodoItem;
  deleteItem: (id: number) => void;
}

export default function ListItem({ listItem, deleteItem }: ListItemProps) {
  return (
    <li>
        <div><input type='checkbox'/><span>{listItem.text}</span></div>
        <button className='deleteButton' onClick={() => deleteItem(listItem.id)}>Delete</button>
    </li>
  )
}
