
var request = require('request');
var guess;
function run(){
var postData = {
  username: 'NanananNAnananANAnanANANANNanananANAN BATMAN',
  video_id: '_OBlgSz8sSM',
  guess: Math.floor(Math.random() * (2000 - 1)) + 1
};

var url = 'http://10.0.1.133:8081/bouncer'
var options = {
  method: 'post',
  body: postData,
  json: true,
  url: url
}
request(options, function (err, res, body) {
  if (err) {
    console.error('error posting json: ', err)
    throw err
  }
  var headers = res.headers
  var statusCode = res.statusCode
  console.log('body: ', body.message)
});
}


var i;
for(i = 1;i < 2000;i++){
  run()
    }









