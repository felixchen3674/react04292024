import React, { useRef, useState } from "react";

interface User {
  id: number;
  username: string;
  password: string;
}

const EXAMPLE_USERS: User[]= [
  { id: 1, username: "john", password: "123" },
  { id: 2, username: "adam", password: "1234" },
];

export default function LoginForm() {
  // Create refs for the username and password inputs
  const userNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [result, setResult] = useState<string>("")

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
    event.preventDefault()

    const username = userNameRef.current!.value
    const password = passwordRef.current!.value
    const user = EXAMPLE_USERS.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setResult("Login successful!");
      userNameRef.current!.value = "";
      passwordRef.current!.value = "";
    } else {
      setResult("Login failed. Please check your username and password.");
    }
  };

  return (
    <>
      {/* Conditionally render this result */}
      <div>Result: </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" required  id="username" ref={userNameRef}/>
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" required id="password" ref={userNameRef}/>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
