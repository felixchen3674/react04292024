export const Fetch = async () => {
  try {
    const response = await fetch("http://localhost:3000/todos");
    const res = await response.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
