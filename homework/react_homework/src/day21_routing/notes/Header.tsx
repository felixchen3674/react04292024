import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <h1>React Router tutorial</h1>
        <ul>
          <li>
            <Link to={''}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
        </ul>
    </div>
  )
}
