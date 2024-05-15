import React, { useEffect, useRef, useState } from 'react'

export default function PostVariation() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [error, setError] = useState(null)
  const intervalRef = useRef(null);
  const fetchPost = async(id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!response.ok) {
            throw new Error('Post not found')
        }
        const data = await response.json();
        setPost(data);
        setError(null);
    } catch(err) {
        setPost(null);
        setError(err.message)
        if (intervalRef) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
  }

  useEffect(() => {
    fetchPost(id);
    intervalRef.current = setInterval(() => {
        setId(prev => prev + 1);
    }, 10000);
    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }
  }, [id])

  return (
    <div>
        <div>
      {error ? (
        <div>{error}</div>
      ) : post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
  )
}
