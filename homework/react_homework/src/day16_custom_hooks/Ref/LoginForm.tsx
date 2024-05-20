import React, { useRef, useState } from 'react';

const EXAMPLE_USERS = [
  { id: 1, username: 'john', password: '123' },
  { id: 2, username: 'adam', password: '1234' },
];

export default function LoginForm() {
  // Create refs for the username and password inputs
  const userNameRef = useRef('');
  const passwordRef = useRef('');
  const [result, setResult] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
    e.preventDefault();
    const username = userNameRef.current;
    const password = passwordRef.current;
    const user = EXAMPLE_USERS.find((user) => {
      return user.username === username && user.password === password;
    });
    user ? setResult('Success') : setResult('Failed');
    userNameRef.current = '';
    passwordRef.current = '';
  };

  return (
    <>
      {/* Conditionally render this result */}
      <div>Result: {result}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              onChange={(e) => {
                userNameRef.current = e.target.value;
              }}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              onChange={(e) => {
                passwordRef.current = e.target.value;
              }}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
