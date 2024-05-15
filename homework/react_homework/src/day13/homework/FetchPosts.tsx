import React, { useEffect, useState } from 'react';
import Axios from 'axios';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
export default function FetchPosts() {
  const [post, setPost] = useState<Post | null>(null);
  const [id, setId] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
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
      }
    };
    getPostData();
  }, [id]);
  return (
    <div>
      <p>userId:{post?.userId}</p>
      <p>id:{post?.id}</p>
      <h1>Title: {post?.title}</h1>
      <p>Content:{post?.body}</p>
      <button onClick={() => setId((pre) => pre + 1)}>Next</button>
      {error ? <p>{error}</p> : <></>}
    </div>
  );
}
