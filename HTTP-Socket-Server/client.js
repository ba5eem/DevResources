//jshint esversion: 6
const net = require ('net');
const fs = require('fs');
const path = require('path');
const request = require('./ClientRequest');


const server = new net.Socket();
server.connect(8080, (client) => {
  request.processClient();


});


























