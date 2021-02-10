// snake-client/play.js
const name = process.argv[2].slice(0,3);
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');

setupInput(connect(name));
