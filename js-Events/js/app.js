//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

function moreContent(){
	var bac = document.createElement("p");
	bac.id = "more";
	bac.innerHTML = bacon;
	document.getElementsByClassName("block1 col-sm-4")[0].appendChild(bac);
}


//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/

function lessContent(){
	var hipster = document.getElementById("less");
       if(hipster.style.display === 'block')
          hipster.style.display = 'none';
       else
          hipster.style.display = 'block';
}

//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increae the font size to 150%*/

function zoom(){
	var tcat = document.getElementById("biggie");
	tcat.addEventListener("mouseover", zoom);
	if(tcat.style.fontSize === "100%")
		tcat.style.fontSize = "150%";
	else
		tcat.style.fontSize = "100%";
}

//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var menuItems = ["fries", "water", "soft serve"];

function valueMenu(){
	for(var i = 0;i < menuItems.length; i++){
		var myFavs = document.createElement("div");
		myFavs.innerHTML = menuItems[i];
		menu.appendChild(myFavs);
	}

}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 20px after clicking on the text.*/

function redFace(){
	var ginny = document.getElementById("drink");
	if(ginny.style.color === "black")
		ginny.style.color = "red";
	else
		ginny.style.fontColor = "black";
}


//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

function showPrice(){
	var thePrice = document.getElementById("price");
	document.getElementById("oreo").addEventListener("mouseover", showPrice);
	if(thePrice.style.display === "none"){
		thePrice.style.display = "block";
		thePrice.innerHTML = "$5.55";
	}
	else
		thePrice.style.display = "none";
}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";

var buttons = document.getElementById("displayQuote");
Benjamin.addEventListener("click", quoteMaker);

function quoteMaker(){
	var childQuote = document.createElement("p");
	childQuote.innerHTML = myQuote;
	displayQuote.appendChild(childQuote);
}

//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];

var buttons2 = document.getElementById("random");
buttons2.addEventListener("click", randomQuote);

function randomQuote(){
	var ranQ = document.createElement("p");
	ranQ.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
	displayQuotes.appendChild(ranQ);
	// for(var i = 0;i < quotes.length; i++){
	// 	var ranQ = document.createElement("p");
	// 	ranQ.innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
	// 	displayQuotes.appendChild(ranQ);
	// }
}

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clickig on the button.
*/




showHide.addEventListener("click", moneyMaker);

const moneyMaker = () => {
  showmoney.style.display = ["none", "block"].filter(e => {
    return showmoney.style.display !== e;
  })[0];
};


// showHide.addEventListener("click", moneyMaker);

// function moneyMaker(){
// 	if (showmoney.style.display === "none"){
// 		showmoney.style.display = "block";
// 	}
// 	else{
// 		showmoney.style.display = "none";
// 	}
// }












