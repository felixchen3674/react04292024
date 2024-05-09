// setTimeout and other promises / async operations will happen after sync operations
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// console.log("hello");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("data", data);
//   });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("resolved value");
//     reject("rejected error");
//   }, 2000);
// });

// p.then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log("err", err);
// });

async function foo() {
  try {
    // await will block the rest of the operation,
    // until p is either resolved or rejected
    const data = await p;

    // putting await before a non-promise value is pointless
    //   const number = await 5;

    console.log(data);
    console.log("inside foo, after promise");
  } catch (err) {
    console.log("Promise is rejected:", err);
  }
}

// foo();
// console.log("sync");

// .then chaining

//.then returns a promise, that resolves to the callback's return value
Promise.resolve(5)
  .then((value) => {
    // console.log(value);
    // throw new Error("value");
    return 4;
  })
  .then((number) => {
    // console.log(number);
    // throw new Error("number");
    return "doiwqjdoiqwjoqwdjq";
  })
  .then((data) => {
    // console.log(data);
  })
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

// console.log(p);

const getBeef = async () => {
  return "beef";
};
const cookBeef = async (beef) => {
  if (beef === "beef") return "patty";
  else throw new Error("Missing beef");
};
const getBuns = async () => {
  return "buns";
};
const putBeefBetweenBuns = async (buns, patty) => {
  if (buns === "buns" && patty === "patty") return "burger";
  else {
    throw new Error("Missing ingredient");
  }
};

// getBeef()
//   .then((beef) => {
//     const patty = cookBeef(beef);
//     return patty;
//   })
//   .then((patty) => {
//     const buns = getBuns();
//     return buns;
//   })
//   .then(({ patty, buns }) => {
//     //scope issues
//     return putBeefBetweenBuns(buns, patty);
//   })
//   .then((burger) => {
//     console.log(burger);
//   });

const makeBurger = async () => {
  const beef = await getBeef();
  console.log(beef);
  const patty = await cookBeef(beef);
  console.log(patty);
  const buns = await getBuns();
  console.log(buns);
  const burger = await putBeefBetweenBuns(buns, patty);
  console.log(burger);
  //   return burger;
};

makeBurger();
// Promise.resolve(
//   Promise.resolve(
//     Promise.resolve(Promise.resolve(Promise.resolve(Promise.resolve(4))))
//   )
// ).then((Data) => {
//   console.log(Data);
// });
