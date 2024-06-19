const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config(path.join(__dirname, "../.env"));
const { MONGO_URL2 } = process.env;
//import the apikey and .env environment

const Todo = require("../models/Todo");
//import the todo schema model

async function run() {
  try {
    await mongoose.connect(MONGO_URL2);
    console.log("Connected to DB.");
    await Promise.all([Todo.collection.drop()]);
    // reset database

    const todo1 = await Todo.create({
      task: "Complete React project",
      completed: false,
      date: "2024-05-28",
      description:
        "Finish the React project by implementing Redux and adding styling.",
    });

    const todo2 = await Todo.create({
      task: "Prepare for presentation",
      completed: false,
      date: "2024-05-30",
      description:
        "Create slides, rehearse presentation, and gather feedback from peers.",
    });
    // create initial todo samples

    await Promise.all([todo1.save(), todo2.save()]);
    console.log(todo1, todo2);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

run().catch(console.dir);
