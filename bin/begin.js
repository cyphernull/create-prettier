const inquirer = require("inquirer")

const questions = [
  {
    type: "input",
    name: "printWidth",
    message: "Print Width | Default: 80 ?",
    default: 80,
    filter: input => {
      return parseInt(input, 10)
    },
  },
  {
    type: "input",
    name: "tabWidth",
    message: "Tab Width | Default: 2 ?",
    default: 2,
    filter: input => {
      return parseInt(input, 10)
    },
  },
  {
    type: "confirm",
    name: "semi",
    message: "Semicolons | Default: true ?",
    default: true,
  },
  {
    type: "confirm",
    name: "singleQuote",
    message: "Quotes | Default: false ?",
    default: false,
  },
  {
    type: "list",
    name: "trailingComma",
    message: "Trailing Commas | Default: none ?",
    choices: ["none", "es5", "all"],
  },
  {
    type: "confirm",
    name: "bracketSpacing",
    message: "Bracket Spacing | Default: true ?",
    default: true,
  },
  {
    type: "confirm",
    name: "jsxBracketSameLine",
    message: "JSX Brackets Same Line | Default: false ?",
    default: false,
  },
  {
    type: "list",
    name: "arrowParens",
    message: "Arrow Function Parentheses | Default: avoid ?",
    choices: ["avoid", "always"],
  },
]

function begin() {
  console.log("begin")
  return new Promise((res, rej) => {
    inquirer.prompt(questions).then(function(answers) {
      res(answers)
    })
  })
}

module.exports = begin
