
//Variables defined here:
var display = document.getElementById("display");
var currentValue = "";
var operator = "";
var controls = ['Clear','Get Balance','Deposit Cash','Withdraw Cash','History'];






//Beginning of forEach Code:
calculator.runElements();
//For each code to create elements for controls and add eventlisteners
  controls.forEach(function(controls) {
    var button = document.createElement('button');
    button.innerHTML = controls;
    button.classList.add('controls');
    button.addEventListener('click', controlFunction);
    calc.appendChild(button);
  });

  //End of forEach Code



//Functions for cash Register begin here:
//Input function here:
  function inputFunc () {
    var selectedNumber = this.innerHTML;
    currentValue += selectedNumber;
    display.innerHTML += selectedNumber;
  }
//Functions for operator values:
  function moveValue (x){
    x = this.innerHTML;
    calculator.operatorSign();

    if (x === "+"){
      operator = "+";
    }else if(x === "-"){
      operator = "-";
    }else if(x === "÷"){
      operator = "÷";
    }else if(x === "x"){
      operator = "x";
    }
}

function calculateValue (){
    calculator.calcValue();
    
}

//function for controls begins here:
function controlFunction(selection){
    selection = this.innerHTML;
    calculator.controls(selection);
  } 



  


