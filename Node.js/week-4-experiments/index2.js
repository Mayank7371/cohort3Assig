const fs = require("fs");
// function main(fileName) {
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     total = 0;
//     for (let index = 0; index < data.length; index++) {
//       if (data[index] === " ") {
//         total++;
//       }
//     }
//     console.log(total + 1);
//   });
// }
// main(process.argv[2]);

// console.log(process.argv); // lets you see all the commands that you wrote in the terminal
// const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === " ") {
            words++;
          }
        }
        console.log(`There are ${words + 1} words in ${file}`);
      }
    });
  });
program
  .command("count_lines")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let lines = 0;
        for (let i = 0; i < data.length; i++) {
          if (data[i] === "\n") {
            lines++;
          }
        }
        console.log(`There are ${lines + 1} lines in ${file}`);
      }
    });
  });

program.parse();
