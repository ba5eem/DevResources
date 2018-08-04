//jshint esversion: 6

const net = require('net');//This class is used to create a TCP or IPC server.
const server = new net.Socket();
server.connect(6969, () => {
  console.log(`connected to server at port '6969'`);

  // |---- readable
  // v                 v---- writable
  process.stdin.pipe( server );

  // |---- readable
  // v         v---- writable
  server.pipe( process.stdout );
});