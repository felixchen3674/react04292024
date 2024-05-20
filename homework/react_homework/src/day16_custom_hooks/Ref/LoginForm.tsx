import React, { useRef, useState } from "react";

const EXAMPLE_USERS = [
  { id: 1, username: "john", password: "123" },
  { id: 2, username: "adam", password: "1234" },
];

export default function LoginForm() {
  // Create refs for the username and password inputs
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
    e.preventDefault();

    const userName = usernameRef.current?.value;
    const password = usernameRef.current?.value;

    const user = EXAMPLE_USERS.find(
      (user) => user.username === userName && user.password === password
    );

    if (user) {
      setResult("Login success");
    } else {
      setResult("Invalid username or password");
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
            <input type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" required />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
