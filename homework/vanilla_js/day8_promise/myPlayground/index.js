function callbackHell() {
  setTimeout(() => {
    console.log('1')
    setTimeout(() => {
      console.log('2')
      setTimeout(() => {
        console.log('3')
        setTimeout(() => {
          console.log('4')
          setTimeout(() => {
            console.log('5')
            setTimeout(() => {
              console.log('6')
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}
callbackHell()

// async & await
async function add(a, b) {
  return a + b
}
console.log(add(1, 2)) // Output a Promise

add(1, 2).then((data) => console.log(data)) // output: 3

async function calc() {
  // await keyword before a promise
  // await until promise is fulfiled, then return the resolved value
  const sum = await add(1, 2)
  console.log(sum + 2)
}
calc()

// 'https://jsonplaceholder.typicode.com/posts/1'
// .then()
const url = 'https://jsonplaceholder.typicode.com/posts/1'
fetch(url)
  .then(response => { // corresponds to the fetch(url)
    return response.json();
  })
  .then(data => { // corresponds to the response.json()
    console.log(data);
  })
  .catch(() => { // what ever which promise is rejected, console.log()
    console.error("Rejected")
  });

// async/await
// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // response.json() is also a promise
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Rejected', error);
//   }
// }

// fetchData();


// write a promise-based function that return a random number after a delay 
function randomDelay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random()
      resolve(randomNum)
    }, time)
  })
}

randomDelay(3000)
  .then(randomNum => {
    console.log(randomNum)
  })
  .catch(() => console.log('Rejected'))


// use Promise.all to write an example
// Promise.all is a method that takes an array of promises as input
// returns a single promise that resolves when all of the input promises have resolved
// or rejects with the reason of any promise that rejects

// const urls = [
//   'https://jsonplaceholder.typicode.com/posts/1',
//   'https://jsonplaceholder.typicode.com/posts/2',
//   'https://jsonplaceholder.typicode.com/posts/3'
// ];

// const promises = urls.map(url => fetch(url).then(response => response.json()));

// Promise.all(promises)
//   .then(results => {
//     results.forEach(data => {
//       console.log(data);
//     });
//   })
//   .catch(error => {
//     console.error('At least one request failed:', error);
//   });
