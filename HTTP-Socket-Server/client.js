//jshint esversion: 6
const net = require ('net');
<<<<<<< HEAD
// const fs = require('fs');
// const path = require('path');
const request = require('./ClientRequest');
const port = 8080;




const server = new net.Socket();

server.connect(port, (client) => {
  console.log('Client has started up');
  console.log(server);
  server.write('Client On');
=======
const fs = require('fs');
const path = require('path');
const request = require('./ClientRequest');


const server = new net.Socket();
server.connect(8080, (client) => {
  request.processClient();
>>>>>>> c04443cfb25cb6b3e1653dbf88d800a373415aff


});




<<<<<<< HEAD
// const server = new net.Socket();
// server.connect(8080, (client) => {
//   request.processClient();


// });




=======
>>>>>>> c04443cfb25cb6b3e1653dbf88d800a373415aff






















