var cohortDate = new Date("Dec 3, 2017 20:00:00").getTime();

var updateCountEvery = setInterval(function(){
  var todaysDate = new Date().getTime();
  var dateFromNowToEnd = cohortDate - todaysDate;

  var days = Math.floor(dateFromNowToEnd / (1000 * 60 * 60 * 24));
  var hours = Math.floor((dateFromNowToEnd % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dateFromNowToEnd % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dateFromNowToEnd % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (dateFromNowToEnd < 0) {
    clearInterval(updateCountEvery);
    document.getElementById('countdown').innerHTML = "Class Begins!";
  }




},1000);



var fade = 2000;

//background color change code:
var updateColorEveryMinute = setInterval(function(){
  var colorId = '0123456789ABCDEF';
  var hashTag = '#';
  for(var i = 0; i < 6; i++){
    hashTag += colorId[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hashTag;




},fade);
  


