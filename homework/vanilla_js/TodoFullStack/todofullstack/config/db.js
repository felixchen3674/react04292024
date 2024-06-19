const path = require("path");
require("dotenv").config(path.join(__dirname, "../.env"));
const { MONGO_URL2 } = process.env;
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URL2)
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = mongoose.connection;

// to create the connection to the database and export it to the server.js to execute it when we start our server
