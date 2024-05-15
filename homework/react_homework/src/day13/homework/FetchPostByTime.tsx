import React, { useEffect, useState } from 'react';
import Axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPostByTime() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getPostData = async () => {
      setError(null);
      try {
        const res = await Axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(res.data);
      } catch (error) {
        setError('Failed to fetch post. Please try again later.');
        setPost(null);
        if (intervalId) {
          clearInterval(intervalId);
        }
      }
    };

    getPostData();
  }, [id]);

  useEffect(() => {
    const id = setInterval(() => {
      setId((prevId) => prevId + 1);
    }, 10000);
    setIntervalId(id);

    return () => {
      if (id) {
        clearInterval(id);
      }
    };
  }, []);

  return (
    <div>
      <p>userId: {post?.userId}</p>
      <p>id: {post?.id}</p>
      <h1>Title: {post?.title}</h1>
      <p>Content: {post?.body}</p>
      {error && <p>{error}</p>}
    </div>
  );
}
