import React from 'react'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Homepage from './Homepage'
import TodoDetails from './TodoDetails'
import {TodosProvider} from './TodosContext'

// set up your routes here
export default function Day21Play() {
  return (
    <TodosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
        </Routes>
      </BrowserRouter>
    </TodosProvider>
  )
}
