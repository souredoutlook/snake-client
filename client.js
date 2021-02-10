//snake-client/client.js

const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', ()=>{
    console.log('Successfully co-snek-ted to game server!');
    conn.write('Name: SOL');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

module.exports = {connect};