//input.js

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput);
  
  return stdin;
}

// on any input from stdin (standard input), check to see if it is CTRL+C and then exit if it is
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
}

module.exports = {setupInput};