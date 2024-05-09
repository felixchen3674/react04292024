export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await data.json();
  return json;
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return data;
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  let results = [];
  let orderResults = new Array(order.length);
  for (let i = 0; i < promises.length; i++) {
    try {
      const result = await promises[order[i] - 1]();
      results.push(result);
    } catch (error) {
      throw new Error(`Promise at position ${order[i]} failed with error: ${error}`)
    }
  }
  order.forEach((position, index) => {
    orderResults[index] = results[position - 1];
  })
  return orderResults;
};
