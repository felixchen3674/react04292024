const str: string = "Qwdq";

// function sum(a: number, b: number): number {

//   return veryComplxFunc();
// }

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// Generate a random color in hexadecimal format
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomColor);

// // Generate an array with random integers
// const randomArray: number[] = Array.from({ length: 5 }, () =>
//   Math.floor(Math.random() * 100)
// );
// console.log(randomArray);

// // Shuffle an array using the Fisher-Yates algorithm
// function shuffleArray(array: number[]): number[] {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const shuffledArray = shuffleArray(originalArray);
// console.log(shuffledArray);

// type Person2 = {
//   name: string;
//   age: number;
//   sayHi: () => string;
//   isHuman: boolean;
// };

type Gender = "Male" | "Female" | "binary";
interface Person {
  name: string;
  age: number;
  sayHi: () => string;
  isHuman: boolean;
  gender?: Gender;
}

// type MiddleNameType = string | undefined;

// const middleName: MiddleNameType = undefined;

const person: Person = {
  age: 1,
  name: "qiodjwq",

  isHuman: true,
  sayHi: () => {
    return "";
  },
};

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = (await res.json()) as Post;
  //   console.log(data.userId);

  return data;
}

fetchPosts();
