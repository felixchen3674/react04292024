const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const getRandomNumber = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      resolve(randomNumber);
    }, 1000);
  });
};

const examplePromiseAll = async () => {
  try {
    const [jsonData, randomNumber] = await Promise.all([
      fetchData(),
      getRandomNumber(),
    ]);
    console.log("Fetched data:", jsonData);
    console.log("Random number:", randomNumber);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
};

examplePromiseAll();
