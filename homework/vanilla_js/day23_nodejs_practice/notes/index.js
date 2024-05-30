// const fs = require("fs");

// fs.readFile('./message.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// import generateName from "sillyname";
// import {randomSuperhero} from "superheroes"
// // var generateName = require('sillyname');
// var sillyname = generateName();
// var superhero = randomSuperhero()

// console.log(`My name is ${sillyname}`);
// console.log(`My favorite superhero is ${superhero}`);

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    { message: "Type in your URL", name: "URL" },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("user_input.png"));

    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

    } else {
      // Something else went wrong
    }
  });
