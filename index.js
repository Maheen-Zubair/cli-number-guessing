#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer_1.default.prompt([
    {
        name: "usergGuessingNumber",
        type: "number",
        message: "please guess a number, between 1-6:",
    },
]);
console.log(answers);
if (answers.usergGuessingNumber === randomNumber) {
    console.log("congratulation!");
}
else {
    console.log("oops! try again.");
}
