import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

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
  const {
    data: posts,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

//   const a = useA();
//   const b = useB();
//   const c = useC();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  return (
    <div>
      <h2>Post List with useFetch Hook</h2>

      <ul>
        {posts.map((post: any) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </ul>
    </div>
  );
}
