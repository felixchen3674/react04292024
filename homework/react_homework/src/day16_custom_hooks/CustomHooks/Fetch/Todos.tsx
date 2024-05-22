import React from "react"
import useFetch from "./useFetch"

// use useFetch to implement the Component
// fetches from jsonplaceholder, implement loading, and error handling

export default function Todos() {
  const posts = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>
      <h1>Posts</h1>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  )
}
