import React, { useState, useEffect } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

function PostViewer() {
  const [postId, setPostId] = useState(1);
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error("Error fetching post:", error);
        setPostData(null);
      }
    };

    fetchPostData();
  }, [postId]);
  return (
    <div>
      {postData ? (
        <>
          <h1>{postData.title}</h1>
          <p>{postData.body}</p>
        </>
      ) : (
        <p>Error: Post not found.</p>
      )}
      <button onClick={() => setPostId(postId + 1)}>Next Post</button>
    </div>
  );
}

export default PostViewer;
