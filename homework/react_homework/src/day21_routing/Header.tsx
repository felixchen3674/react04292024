import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h2>Header</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/post">post</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
