
function hand(){
  console.log('ola1')
  console.log(this)
}

let client = new XMLHttpRequest();

client.open("GET", "https://www.reddit.com/r/random.json", true);
//client.setRequestHeader('Access-Control-Allow-Headers', '*');
//client.setRequestHeader('Content-type', 'application/ecmascript');
client.setRequestHeader('Access-Control-Allow-Origin', '*');

client.onreadystate = hand;
client.send();

