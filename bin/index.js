#!/usr/bin/env node
const program = require("commander")
const { write } = require("node-yaml")
const begin = require("./begin")
program.version("0.0.1", "-v, --version").parse(process.argv)

begin().then(data => {
  const path = process.cwd()
  write(`${path}/.prettierrc.yaml`, data, "utf8")
})

program.parse(process.argv)
