export async function fetchData(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("page not found");
      }
    })
    .catch((err) => {
      throw err.message;
    });
}
