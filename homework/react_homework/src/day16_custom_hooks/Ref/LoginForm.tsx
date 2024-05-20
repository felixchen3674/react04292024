import React, {useRef, useState} from "react"

const EXAMPLE_USERS = [
  {id: 1, username: "john", password: "123"},
  {id: 2, username: "adam", password: "1234"},
]

export default function LoginForm() {
  const [loginResult, setLoginResult] = useState(null)

  // Create refs for the username and password inputs
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    // if login succeeds or fails, display appropriate message in the result
    // then clear the inputs
    e.preventDefault()

    const username = usernameRef.current.value
    const password = passwordRef.current.value

    const user = EXAMPLE_USERS.find(
      (user) => user.username === username && user.password === password
    )

    if (user) {
      setLoginResult("Login successful!")
    } else {
      setLoginResult("Invalid username or password")
    }

    usernameRef.current.value = ""
    passwordRef.current.value = ""
  }

  return (
    <>
      {/* Conditionally render this result */}
      {loginResult ? (
        <div>{loginResult}</div>
      ) : (
        <>
          <div>Result: </div>
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
      )}
    </>
  )
}
