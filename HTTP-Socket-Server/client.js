//jshint esversion: 6
const net = require ('net');
// const fs = require('fs');
// const path = require('path');
const request = require('./ClientRequest');
const port = 8080;




const server = new net.Socket();

server.connect(port, (client) => {
  console.log('Client has started up');
  console.log(server);
  server.write('Client On');


});




// const server = new net.Socket();
// server.connect(8080, (client) => {
//   request.processClient();


// });


























