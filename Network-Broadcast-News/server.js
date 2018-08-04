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






















///////my first attempt/////
// var sockets = [];
// let clients = [];
// const PORT = process.env.port || 6969;

// const server = net.createServer((socket) =>{
//   sockets.push(socket);
//   socket.name = socket.remoteAddress + ":" + socket.remotePort;

//   socket.on("data", (data) => {
//     data.toString();
//     data = data.slice(0,data.length -1);
//     console.log('3: ',data.toString());
//     if(socket.name === socket.remoteAddress + ":" + socket.remotePort){
//       socket.name = data;
//       let test = socket.name;
//       console.log(test.toString());
//       if(test.toString() === 'baseem'){
//         socket.write(`Welcome back Baseem!`+'\n' + "You have joined the chatroom");
//       }console.log(data.toString() + ' has joined');
//     }else{
//       console.log('1: ',socket.name);
//       console.log('2:',socket.remoteAddress + ":" + socket.remotePort );
//      transmission(socket, data.toString());
//   }
//   });

//   socket.on("close", () =>{
//     console.log(socket + " has disconneted");
//     sockets.splice(sockets.indexOf(socket), 1);
//   });





//   function transmission(from, message){
//   let userName = socket.name;
//   clients.push(userName);
//   console.log(clients);
//   var msg=(userName + ": " + message).toString();
//   sockets.forEach(function(incoming_socket){

//     if(incoming_socket!=from){
//       incoming_socket.write(msg);
//     }
//   });
// }


// }).listen(6969);//close of net.createServer