import React, { useRef, useState, } from "react";

const EXAMPLE_USERS = [
  { id: 1, username: "john", password: "123" },
  { id: 2, username: "adam", password: "1234" },
];

export default function LoginForm() {
  // Create refs for the username and password inputs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>("");


  const handleSubmit = () => {
    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
    event?.preventDefault()
   
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (username && password) {
      const user = EXAMPLE_USERS.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setResult("Login succeeded!");
      } else {
        setResult("Login failed!");
      }

      if (usernameRef.current) usernameRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
    }

  };

  return (
    <>
      {/* Conditionally render this result */}
      <div>Result: {result}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" ref={usernameRef} required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" ref={passwordRef} required />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
