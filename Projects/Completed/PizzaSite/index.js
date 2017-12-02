function visitSite1(){
  document.getElementById('step1').src = "/pizza.html";
}

function visitSite2(){
  document.getElementById('step1').src = "/extra.html";
}

function visitSite3(){
  document.getElementById('step1').src = "/confirm.html";
}

function visitSite4(){
  document.getElementById('step1').src = "/pay.html";
}

function visitSite5(){
  document.getElementById('step1').src = "/delivery.html";
}






/*Append Codes with DOM - for practice*/
/*Orginial pizza P */
var x=document.getElementsByClassName("moreAboutMe");
x[0].innerHTML = "Pizza Original - The best and original reason people fell in love with Pizza";
console.log(x);

/*Orginial pizza Image */
var orgImg = document.createElement("img");
orgImg.id = "orgPiePic";
orgImg.src = "ass/pizza.png";
x[0].appendChild(orgImg);

/*Hawaiian pizza P */
var newPelem = document.createElement("p");
newPelem.id = "pizza2";
newPelem.innerHTML = "Hawaiian - So many pineapples and canadian bacon you wont want to stop eating";
x[0].appendChild(newPelem);

/*Hawaiian pizza Image */
var hawaiianImg = document.createElement("img");
hawaiianImg.id = "hiPiePic";
hawaiianImg.src = "ass/pizza.png";
pizza2.appendChild(hawaiianImg);


/*Sicilian pizza P */
var newPelem = document.createElement("p");
newPelem.id = "pizza3";
newPelem.innerHTML = "Sicilian - 'its raining salami, halle-llujah' true loveafsfdfda fafsafassafgsagasfgasfgs";
pizza2.appendChild(newPelem);

/*Sicilian pizza img */
var sicilianImg = document.createElement("img");
sicilianImg.id = "sicPiePic";
sicilianImg.src = "ass/pizza.png";
pizza3.appendChild(sicilianImg);

/*Meat lover pizza P */
var newPelem = document.createElement("p");
newPelem.id = "pizza4";
newPelem.innerHTML = "Meat Lover - beef, beef, beef, beef,beef, beef, beef, beef,beef, beef, beef, beef,beef, beef, beef, beef beef, beef";
pizza3.appendChild(newPelem);

/*Meat pizza image */
var meatImg = document.createElement("img");
meatImg.id = "meatPiePic";
meatImg.src = "ass/pizza.png";
pizza4.appendChild(meatImg);

/*DOM element practice - renaming title */
var x=document.getElementsByClassName("steps")[1];
x.innerHTML = "Extra($)";




