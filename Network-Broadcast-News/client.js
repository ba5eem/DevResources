const net = require("net");

function randomIP(){
  let a = [91,92,93,94,95,96,97,98];
  let c = [1,2];
  let p = c[Math.floor(c.length * Math.random())]
  let ip = `10.0.1.1${a[Math.floor(a.length * Math.random())]}`;
  console.log(ip, ' -- attempted')
  return ip;
}



function connect(){
  const client = net.createConnection(6968,randomIP(), () => {

  client.write("...")
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
})
}

connect()
process.on('uncaughtException',function(err){
   console.log('something terrible happened..')
   connect()
})