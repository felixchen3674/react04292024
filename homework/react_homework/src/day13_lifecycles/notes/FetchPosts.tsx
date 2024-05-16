import { useEffect, useState } from "react";
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPosts() {
  const [post, setPost] = useState<Post>();
  const [postId, setPostId] = useState<number>(1);
  const [isError, setIsError] = useState<boolean>(false);
  const handleFetch = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        throw new Error("Something wrong");
      }
      // catch will not catch the error even it provide the invalid url, therefore we need to throw a error if the response is not ok
    } catch (err) {
      console.log("err", err);
      setIsError(true);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [postId]);

  if (isError) return <div>Something go wrong</div>;
  if (!post) return <div>Page not found</div>;
  return (
    <div>
      <h4>Post Id: {post.id}</h4>
      <h4>Post Title:{post.title}</h4>
      <h4>Post Body:{post.body}</h4>
      <button onClick={() => setPostId((pre) => pre + 1)}>next</button>
    </div>
  );
}
