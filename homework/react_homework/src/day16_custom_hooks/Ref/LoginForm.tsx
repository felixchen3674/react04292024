import React, { FormEvent, LegacyRef, useRef, useState } from "react";
interface User {
  id: number;
  username: string;
  password: string;
}

const EXAMPLE_USERS: User[] = [
  { id: 1, username: "john", password: "123" },
  { id: 2, username: "adam", password: "1234" },
];

export default function LoginForm() {
  // Create refs for the username and password inputs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const username = usernameRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const user = EXAMPLE_USERS.find(
      (item) => item.username === username && item.password === password
    );
    if (user) {
      setResult("Login successful");
    } else {
      setResult("Login failed");
    }
    if (usernameRef.current) usernameRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";

    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
  };

  return (
    <>
      {/* Conditionally render this result */}
      <div>Result:{result} </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" required ref={usernameRef} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" required ref={passwordRef} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
