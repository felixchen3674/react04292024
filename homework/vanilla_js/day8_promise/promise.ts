export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    return posts;
  } catch (err) {
    console.log(err);
  }
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  // return the posts

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log("data", data);
//   });

export const fetchPostById = async (id: string) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    return post;
  } catch (err) {
    console.log(err);
  }

  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export const sequentialPromise = async <T>(
  promises: Promise<T>[],
  order: number[]
) => {
  const results = [];
  for (const idx of order) {
    try {
      const result = await promises[idx - 1];
      results.push(result);
    } catch (error) {
      throw "error";
    }
  }
  return results;
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
};
