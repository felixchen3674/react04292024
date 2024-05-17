import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function wait(time = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res("");
    }, time);
  });
}

export default function PostListFn() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        await wait();
        // throw new Error("some error");
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  return (
    <div>
      <h2>Post List</h2>

      <ul>
        {posts.map((post: any) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </ul>
    </div>
  );
}
