//snake-client/client.js

const net = require('net');
const {IP, PORT} = require('./constants')

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', ()=>{ //connect and register our name
    console.log('Successfully co-snek-ted to game server!');
    conn.write('Name: MYS');
  });

  conn.on('connect', ()=> { //begin sending movement data
    // setInterval(()=>{
    //   conn.write('Move: up'); //could also be 'Move: down', 'Move: left', 'Move: right' 
    // },200);
  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
}

module.exports = {connect};