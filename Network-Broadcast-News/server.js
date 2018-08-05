//jshint esversion: 6

const net = require('net');
const sin = process.stdin;
const sout = process.stdout;
var clients = [];

const broadcast = (sender, message) => clients
  .filter(c => c !== sender)
  .forEach(c => {
    c.write(message);
  });
  const server = net.createServer((client)=> {
    console.log("User has Connected");
    console.log(client.address());
    clients.push(client);
    client.username = null;
    client.write('What is your username?\n');

    client.on('data', (data) => {
      if(client.username === null){
        client.username = data.toString();
        client.write(`Welcome ${client.username}`);
      }else {
        broadcast(client,(`${client.username}: `+`${data}`));
      }
      console.log(`${client.username} Has Connected`);
    });
  }).listen(6969);














