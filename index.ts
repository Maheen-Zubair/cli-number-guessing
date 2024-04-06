#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
  {
    name: "usergGuessingNumber",
    type: "number",
    message: "please guess a number, between 1-6:",
  },
]);
console.log(answers);
if (answers.usergGuessingNumber === randomNumber) {
  console.log("congratulation!");
} else {
  console.log("oops! try again.");
}
