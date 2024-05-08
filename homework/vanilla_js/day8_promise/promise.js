export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .catch(error => {
    console.error("Error fetching posts:", error);
    throw error; // Propagate the error to the caller
  });
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  return fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .catch(error => {
    console.error("Error fetching posts:", error);
    throw error; // Propagate the error to the caller
  });
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results = [];
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