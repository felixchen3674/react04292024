export const fetchPosts = async () => {
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

export const fetchPostById = async (id: number) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export const sequentialPromise = async (
  promises: Promise<string>[],
  order: number[]
): Promise<string[]> => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results: string[] = [];
  for (const index of order) {
    try {
      const result = await promises[index - 1];
      results.push(result);
    } catch (error) {
      console.error('Error executing promise:', error);
      throw error;
    }
  }
  return results;
};