/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

matCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

msgCount.innerHTML =23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

fullname.innerHTML = 'Ronald McDonald';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

age.innerHTML = '63 Years Old'

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var jobBox = document.createElement('div');
jobBox.id = 'job';
jobBox.innerHTML = 'Clown and Restauranteur';
data.appendChild(jobBox);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var hobbyBox = document.createElement('div');
hobbyBox.id = 'hobbies';
hobbyBox.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King";
data.appendChild(hobbyBox);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var locBox = document.createElement('div');
locBox.id = 'location';
locBox.innerHTML = 'Honolulu, HI';
data.appendChild(locBox);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var wantBox = document.createElement('div');
wantBox.id = 'wants';
wantBox.innerHTML = 'Looking for a Mrs. McDonald';
data.appendChild(wantBox);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var proBox = document.createElement('p');
proBox.id = 'pro2';
proBox.innerHTML = "I'm super easy-going and have a great sense of humor. I love fast food and believe that every meal should be a happy meal."
profile.appendChild(proBox);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var nameElem = document.getElementsByClassName('firstName');
nameElem[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var ageElem = document.getElementsByClassName('otherAge');
ageElem[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var statusElem = document.getElementsByClassName('status');
statusElem[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

var nameElem = document.getElementsByClassName('firstName');
nameElem[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

var ageElem = document.getElementsByClassName('otherAge');
ageElem[1].innerHTML = 68;


 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto



