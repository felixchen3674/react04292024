import React from 'react'
import TodoList from './todos'
import {TodosProvider} from './TodosContext'

export default function Day18Play() {
  return (
    <div>
      <h1>Day 18 Play</h1>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  )
}
