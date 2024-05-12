type Post = {
  userId: number;
  id: Number;
  title: String;
  body: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  // return the posts
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', (error as Error).message);
    return [];
  }
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data", data);
//   });

export const fetchPostById = async (id: number): Promise<Post> => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data: Post = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching posts:', (error as Error).message);
    return { userId: -1, id: -1, title: 'none', body: 'none' };
  }
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
};
