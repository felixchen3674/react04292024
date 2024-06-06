import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Lin</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1>")
})
app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});
