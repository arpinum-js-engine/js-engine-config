"use strict";

const { loadConfiguration } = require("../build");

const configuration = loadConfiguration({
  port: {
    env: "PORT",
    type: "integer",
  },
  pi: {
    env: "PI",
    type: "float",
  },
  answer: {
    env: "ANSWER",
    type: "boolean",
  },
});

console.log(configuration);
