//jshint esversion: 6

const net = require ('net');
const fs = require('fs');
<<<<<<< HEAD
// const path = require('path');
const port = 8080;

let argv = process.argv;
console.log(argv)

const server = net.createServer((client) => {
  client.on('data', (data) => {
    console.log(data.toString());
  });
});


server.listen(port,() => {
  console.log('Server listening on ', port);
})















// const server = net.createServer((client)=>{
//   client.on('data', (data)=>{

//     const header = data.toString().split(' ');
//     const method = header[0];
//     var uri = header[1];
//     // console.log(data.toString());
//     // console.log(process.argv);
//     if(uri){
//       let path = '.' + uri;

//       fs.readFile(path, (err,data)=>{
//         if(err){
//           fs.readFile("./404.html", (err, data) => {
//           console.log("error", err);
//           var notFoundHeader = `HTTP/1.1 404 NOT FOUND
//             Server: Mozilla 5.0
//             STATUS: ITS COMPLICATED, Will the real server Please STAND UP!
//             Content-Type: text/html;
//             Content-Type: ${data.toString().length}
//             Connection: keep-alive`;
//           client.write(notFoundHeader+'\n\n');
//           client.write(data.toString());
//           });//end of fs-readfile-error
//         }//end of if -err
//         else {
//           let headerOk = `HTTP/1.1 200 OK
//             Server: Mozilla 5.0
//             STATUS: ITS COMPLICATED, Will the real server Please STAND UP!
//             Content-Type: text/html;
//             Content-Type: ${data.toString().length}
//             Connection: keep-alive`;
//           client.write(headerOk+'\n\n');
//           client.write(data.toString());
//           client.end();
//         }//end of else-err

//       });//end of fs readfile - helium
//     }//end of if - uri
//   });//end of client.on

//   client.on('end', () => {
//     console.log('Connection Closed');
//     console.log('test');
//     });//end of client.on
//   });//end of const server -create server
//   server.listen(port, ()=>{
//     const address = server.address();
//     console.log(`Opened server on ${address.port}`);
//   });//end of server.listen
=======
const path = require('path');
const port = 8080;



const server = net.createServer((client)=>{
  client.on('data', (data)=>{

    const header = data.toString().split(' ');
    const method = header[0];
    var uri = header[1];
    console.log(data.toString());
    console.log(process.argv);
    if(uri){
      let path = '.' + uri;

      fs.readFile(path, (err,data)=>{
        if(err){
          fs.readFile("./helium.html", (err, data) => {
          console.log("error", err);
          var notFoundHeader = `HTTP/1.1 404 NOT FOUND
            Server: Mozilla 5.0
            STATUS: ITS COMPLICATED, Will the real server Please STAND UP!
            Content-Type: text/html;
            Content-Type: ${data.toString().length}
            Connection: keep-alive`;
          client.write(notFoundHeader+'\n\n');
          client.write(data.toString());
          });//end of fs-readfile-error
        }//end of if -err
        else {
          let headerOk = `HTTP/1.1 200 OK
            Server: Mozilla 5.0
            STATUS: ITS COMPLICATED, Will the real server Please STAND UP!
            Content-Type: text/html;
            Content-Type: ${data.toString().length}
            Connection: keep-alive`;
          client.write(headerOk+'\n\n');
          client.write(data.toString());
          client.end();
        }//end of else-err

      });//end of fs readfile - helium
    }//end of if - uri
  });//end of client.on

  client.on('end', () => {
    console.log('Connection Closed');
    console.log('test');
    });//end of client.on
  });//end of const server -create server
  server.listen(port, ()=>{
    const address = server.address();
    console.log(`Opened server on ${address.port}`);
  });//end of server.listen
>>>>>>> c04443cfb25cb6b3e1653dbf88d800a373415aff

