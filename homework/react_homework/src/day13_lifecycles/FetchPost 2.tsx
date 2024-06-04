import React,  { useEffect, useState } from "react";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export default function FetchPost() {
    const [postId, setPostId] = useState<number>(1);
    const [post, setPost] = useState<Post | {}>({});
    const [count, setCount] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
  
    const { userId, id, title, body } = post as Post;
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Post not found');
          }
          return res.json();
        })
        .then((data: Post) => {
          setPost(data);
        })
        .catch((error) => {
          alert('Post not found. Stopping auto-fetch.');
          setIsRunning(false);
        });
    }, [postId]);
  
    useEffect(() => {
      let timer: ReturnType<typeof setInterval>;
      if (isRunning) {
        timer = setInterval(() => {
          setCount((prevCount) => prevCount + 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [isRunning]);
  
    useEffect(() => {
      let fetchInterval: ReturnType<typeof setInterval>;
      if (isRunning) {
        fetchInterval = setInterval(() => {
          setPostId((prevId) => prevId + 1);
        }, 10000);
      }
      return () => clearInterval(fetchInterval);
    }, [isRunning]);
  
    const handleNextPost = () => {
      setPostId((prev) => prev + 1);
    };
  
    const handleStart = () => {
      setIsRunning(true);
    };
  
    const handlePause = () => {
      setIsRunning(false);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setCount(0);
    };
  
    return (
      <div className="container">
        <h2>FetchPostByIdApp</h2>
        <div>Post Id: {id}</div>
        <div>Title: {title}</div>
        <button onClick={handleNextPost}>Next Post</button>
        <h1>Timer</h1>
        <div id="timer">
          <span id="count">{count}</span> seconds
        </div>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  };