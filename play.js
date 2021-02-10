// snake-client/play.js

const {connect} = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');

setupInput(connect());
