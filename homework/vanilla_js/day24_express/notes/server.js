const express = require("express");
const app = express();
// app.use(logger); //****/ the order matter for middleware or router
app.set("view engine", "ejs"); //set up view engine ; the first parameter has to be view engine, other it won't identify it as view engine

app.use(express.static("public")); // the filename of the file in the public has to match with the url . ex: about.html match with localhost:3000/about.html

app.get("/", logger, (req, res) => {
  // we can put the middleware into the request as parameter, it will call when using that request
  console.log("HI");
  //   res.sendStatus(500); // send status code to 500
  //   res.status(500).send("HI"); // sending the status and message with hi
  //   res.status(500).json({ message: "error" });
  //   res.download("server.js"); // will download the file
  res.render("index2", { texts: "Hello" }); // if you not pass exact the same key to the ejs ,it will show default
  //   res.send("goodday!");
});

app.get("/user", (req, res) => {
  const name = req.query.name; // it will get the query infomation for url after ? sign with the key as name
  console.log(name);
  res.send("user");
});
app.get("/user/user", (req, res) => {
  res.send("user/user");
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

require("dotenv").config(); // import the env to node.js environment

app.use(express.json());

const jwt = require("jsonwebtoken"); // importing the jwt function from jsonwebtoken

const posts = [
  {
    username: "john",
    title: "post1",
  },
  {
    username: "tom",
    title: "post2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  console.log(req.user);
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  console.log(user);
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // headers will be passed by request and it should include authorization property
  // the value should be Bearer Token...
  const token = authHeader && authHeader.split(" ")[1];
  console.log(token);
  // extract the property value and verify the token
  if (token === null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    console.log(user);
    req.user = user;
    next();
  });
}

const userRouter = require("./routes/user");

app.use("/user", userRouter); // adding the userRouter path to the current path
app.listen(3000);
