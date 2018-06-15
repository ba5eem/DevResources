/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tayTay = document.getElementById("name1");
tayTay.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following:

Project Manager*/

var manager = document.getElementById("position2");
manager.innerHTML = "Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var concat = document.getElementById("alias3");
concat.innerHTML = "Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var divElem = document.getElementsByClassName("profile");
divElem[0].innerHTML = "I don't listen to Prince";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var legend = document.getElementsByClassName("profile");
legend[1].innerHTML = "If you spend too much time thinking about a thing, you'll never get it done.";

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var char = document.getElementsByClassName("alias");
char[2].innerHTML = "Jules";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var newDiv = document.createElement("div");
newDiv.id = "name7";
newDiv.innerHTML = "Peter Griffin";
nameParent.appendChild(newDiv);

/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var newerDiv = document.createElement("div");
newerDiv.id = "alias8";
newerDiv.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(newerDiv);

//Final Boss
/*9. Create your own profile.*/
//var oldImage = getElementsByTagName("img")[8];



var bossImage = document.createElement("img");
bossImage.src = "https://static.comicvine.com/uploads/original/10/100757/1951910-yogi_bear_show_02.jpg";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(bossImage);

var bossDiv1 = document.createElement("div");
bossDiv1.id = "name9";
bossDiv1.innerHTML = "Baseem";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(bossDiv1);

var bossDiv2 = document.createElement("div");
bossDiv2.id = "position9";
bossDiv2.innerHTML = "Student";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(bossDiv2);

var bossDiv3 = document.createElement("div");
bossDiv3.id = "alias9";
bossDiv3.innerHTML = "Yogi";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(bossDiv3);

var bossDiv4 = document.createElement("div");
bossDiv4.id = "bio9";
bossDiv4.innerHTML = "He does his homework.";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(bossDiv4);















