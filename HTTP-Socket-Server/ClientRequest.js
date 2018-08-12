//jshint esversion: 6


const net = require ('net');
const fs = require('fs');
const path = require('path');

function findBody(uri){
  fs.readFile(path.join(__dirname,uri), 'utf8',(err,data)=>{
    if(err){
      notFound();
    }else {
    var response = data.toString();
    var message = response.split(/\n\s*\n/);
    var body = message.pop();
    console.log("BODY: ",body);
    }
  });
}

function findHead(uri){
  fs.readFile(path.join(__dirname,uri), 'utf8',(err,data)=>{
    if(err){
      notFound();
    }else{
      let response = data.toString();
      let message = response.split(/\n\s*\n/);
      var body = message.pop();
      var head = message.shift(); 
      console.log("BODY: ",body);


      console.log(`HEAD ${uri}: `,head);
    }
  });
}

function help(){
  console.log("kurl: try 'node client.js index.html' or\n 'node client.js -I index.html' for more information.\n Remeber: -I index.html will return the header\n index.html will return the body.");
}

function processClient(){
  let line = process.argv;
  if(line.indexOf('GET') && line[3]){
    findHead(line[3]);
  }  
  else if(line[2] === '-I' && !line[3]){
    help();
  }
  else if(line[2] && line[3]){
    findHead(line[3]);
  }
  else if(line[2] !== '-I' && line.length>2){
    findBody(line[2]);
  }
  else if(line.length <=2){
    help();
  }
  else if(line[2] === '--local-port')
     var port = line[3] || 8080;
}

function notFound(){
  fs.readFile(path.join(__dirname,'404.html'), 'utf8',(err,data)=>{
    console.log(data);
  });
}

module.exports = {
  findBody: findBody,
  findHead: findHead,
  help: help,
  processClient: processClient,
  notFound: notFound
};