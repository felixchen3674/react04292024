const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const jwt = require("jsonwebtoken"); // importing the jwt function from jsonwebtoken

let refreshTokenArray = []; // not recommend for product phase, usually it is connect to database to store;

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) return res.sendStatus(401);
  if (!refreshToken.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.delete("/logout", (req, res) => {
  refreshTokenArray = refreshTokenArray.filter(
    (token) => token !== req.body.token
  );
  res.sendStatus(204);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  console.log(user);
  const accessToken = generateAccessToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokenArray.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(4000);
