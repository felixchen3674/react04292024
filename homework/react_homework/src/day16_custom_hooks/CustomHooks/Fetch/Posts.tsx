import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ErrorType {
  message: string;
}

export default function Posts() {
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<Error | null>(null);
  const { data, isLoading, error } = useFetch<Post>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     setError(null); // Reset error state before fetching new data

  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = (await response.json()) as Post[];

  //       setPosts(data);
  //     } catch (error: any) {
  //       setError({ message: `Failed to fetch posts: ${error.message}` });
  //       setPosts([]);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error && error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
