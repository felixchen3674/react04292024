import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const date = new Date();
  const day = date.getDay();
  
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend"
    adv = "it's time to rest";
  }
  res.render("index.ejs", {
    dayType: type,
    message: adv,
  });
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
