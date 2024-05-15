import React from 'react'

interface ListItemProps {
    task: string;
    handleDelete: () => void;
    handleEdit: () => void
}
export default function ListItem({task, handleDelete, handleEdit}: ListItemProps) {
  return (
    <li className='task'>
        <span>{task}</span>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>Edit</button>
    </li>
  )
}
