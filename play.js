// snake-client/play.js

const {connect} = require('./client')
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // on any input from stdin (standard input), output a "." to stdout
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  return stdin;
}

console.log('Connecting ...');

connect();
setupInput();
