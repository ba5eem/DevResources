/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var rating = document.getElementById("rating1");
rating.innerHTML = "Rating: 5 Stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var price2 = document.getElementById("price2");
price2.innerHTML = "$$$";
var sunriseAddy = document.getElementById("addy2");
sunriseAddy.innerHTML = "Adress: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var divTime = document.createElement("div");
divTime.id = "hours3";
divTime.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(divTime);

//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var kamDiv = document.createElement("div");
kamDiv.id = "price4";
kamDiv.innerHTML = "Price: $$$";
text4.appendChild(kamDiv);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var kamAddy = document.createElement("div");
kamAddy.id = "addy4";
kamAddy.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(kamAddy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"
*/

var kamHours = document.createElement("div");
kamHours.id = "hours4";
kamHours.innerHTML = "Hours: 5pm - 12am Mon - Sat";
text4.appendChild(kamHours);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var kamCom = document.createElement("div");
kamCom.id = "update4";
kamCom.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(kamCom);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/
var newName = document.createElement("div");
newName.id = "name5";
newName.innerHTML = "5. The Death Star Cafe";

var newRating = document.createElement("div");
newRating.id = "rating5";
newRating.innerHTML = "Rating: 2 Stars";

var newPrice = document.createElement("div");
newPrice.id = "price5";
newPrice.innerHTML = "Price: $$";

var newAddy = document.createElement("div");
newAddy.id = "addy5";
newAddy.innerHTML = "Address: A galaxy far, far away.";

var newHours = document.createElement("div");
newHours.id = "hours5";
newHours.innerHTML = "Hours: We never close.";

text5.appendChild(newName);
text5.appendChild(newRating);
text5.appendChild(newPrice);
text5.appendChild(newAddy);
text5.appendChild(newHours);








