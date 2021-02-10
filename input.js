//input.js

const {MOVEMENT,MESSAGE} = require('./constants')
let connection;

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
}

// on any input from stdin (standard input), check to see if it is CTRL+C and then exit if it is
const handleUserInput = function(key) {
  
  key !== '\u0003' ? connection.write(MOVEMENT[key] || MESSAGE[key]) : process.exit();

  // switch (key) {
  //   case 'w':
  //     console.log('Move: up');
  //     setInterval(()=>{
  //       connection.write('Move: up');
  //     },50);
  //     break;
  //   case 'a':
  //     console.log('Move: left');
  //     setInterval(()=>{
  //       connection.write('Move: left');
  //     },50);
  //     break;
  //   case 's':
  //     console.log('Move: down');
  //     setInterval(()=>{
  //       connection.write('Move: down');
  //     },50);
  //     break;
  //   case 'd':
  //     console.log('Move: right');
  //     setInterval(()=>{
  //       connection.write('Move: right');
  //     },50);
  //     break;
  //   case '1':
  //     console.log("Say: yeet!");
  //     connection.write("Say: yeet!");
  //     break;
  //   case '2':
  //     console.log("Say: g'day!");
  //     connection.write("Say: g'day!");
  //     break;  
  //   case '\u0003':
  //     process.exit();
  //   }
}

module.exports = {setupInput};