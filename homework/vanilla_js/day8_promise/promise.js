export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const url = `https://jsonplaceholder.typicode.com/posts`;
  try {
    const response = fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const post = (await response).json();
    return post;
  }
  catch (error) {
    console.error('Error fetching post:', error);
      throw error; 
  }
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const post = await response.json();
      return post;
  } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
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
