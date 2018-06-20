//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

// var macD = document.getElementsByClassName("name");
// macD.addEventListener("click", mcMenu);
// function mcMenu(){
// 	if(menu.style.display === "none"){
// 		menu.style.display = "block";
// 	}else{
// 		menu.style.display = "none";
// 	}
// }


// var McD = document.getElementsByClassName("menu");

var secretMenu = document.getElementsByClassName("name");

for(var i = 0; i<secretMenu.length; i++){
	secretMenu[i].addEventListener("click", showMenu);
}

// var theMenu = document.getElementsByClassName("menu");

function showMenu(){
	var theMenu = this.querySelectorAll(".menu")[0];
	if(theMenu.style.display === "none"){
		theMenu.style.display = "block";
	}else{
		theMenu.style.display = "none";
	}
	console.log(this.innerHTML);
}