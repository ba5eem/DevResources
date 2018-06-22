// 1. Add an event to the 'See Details' content that will create an alert box that says 'Not Available in Hawaii.' after clicking on See Details.
function getId(arg){
  return document.getElementById(arg);
}

let seeDetailsButton = document.getElementById('details');
seeDetailsButton.addEventListener('click', showAlert);
function showAlert(){
  alert('Not Available in Hawaii.')
}


//2. Add an event to the div element with the id of 'name1' that will show/hide the description ('descrip1') after hovering over Air Jordan II.
let name1Elem = getId('name1');
name1Elem.addEventListener('mouseover', hideName1);
function hideName1(){
  name1Elem.style.visibility = 'hidden';
}
name1Elem.addEventListener('mouseout', hideName2);
function hideName2(){
  if(name1Elem.style.display === 'hidden'){
    console.log('ola')
    name1Elem.style.display = 'visible';
  }

}


//3. Add an event to the div element with the id of 'name2' that will show/hide the following description after clicking on the element.
//'The instantly recognizable Jumpman silhouette made its debut with the Air Jordan 3 during Michael Jordan's 1987-88 NBA season.'


//You'll need to:
// create a div element with an id of 'descrip2'
//append this element to the div element with the id of 'name2'


//4. Add events to the all the thumbs up icon that will add a count for each time the icon is clicked on for any shoe.
let thumb = document.getElementsByClassName('far fa-thumbs-up');

for(var i = 0; i < thumb.length; i++){
  thumb[i].addEventListener('click', moreLikes)
}

let count = 0;
function moreLikes(){
  let thumb = document.getElementsByClassName('far fa-thumbs-up');
  this.innerHTML = count++;
  }
//5. Add an event to the plus icon that will increment the price of the Air Jordan V shoe each time the icon is clicked on.


//6. Add an event to the minus icon that will decrement the price of the Air Jordan V shoe each time the icon is clicked on.


//7. Add an event to the Air Jordan XI shoe that will show another colorway for that shoe after hovering over the image.


//8. Add an event to the Air Jordan XII shoe that will increase the image by 50% after clicking on the image.

//9. Add events to both the plus and minus icon that will add or decrease the price each time the respective icon is clicked on.

//10. Add an event to the Air Jordan XXVIII shoe that will show the famous 'crying Michael Jordan' meme after clicking on the image.