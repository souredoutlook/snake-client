//input.js

const {MOVEMENT,MESSAGE} = require('./constants');

let connection;
let intervalID;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput);
  
  return stdin;
};

/**
 * Handle User Input
 * Passed as a callback to the standard input data event handler - if key press is not CTRL+C - write either a movement message key to connection.
 */
const handleUserInput = function(key) {
  if (MESSAGE[key]) {
    connection.write(MESSAGE[key]);
  } else {
    clearInterval(intervalID);
    key !== '\u0003' ?  intervalID = setInterval(()=>connection.write(MOVEMENT[key]), 100) : process.exit();
  }
};

module.exports = {setupInput};