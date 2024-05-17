import React, { useEffect, useState } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default function Post() {
  const [postId, setPostId] = useState<number>(1);
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
      setError(null);
    } catch (err) {
      setPost(null);
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [postId])

  const handleNext = () => {
    setPostId(prev => prev + 1);
  }
  return (
    <>
        {error ? 
        <div>
            {error}
        </div> :
        post ? 
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div> : <></>}
        <button onClick={handleNext}>Next</button>
    </>
  );
}
