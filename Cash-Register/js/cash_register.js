var cashRegister = (function(){
  
  var count = 0;
  var decimalPlace = 0;
  var memory = [];

  var display1 = document.getElementById("display1");
  var display = document.getElementById("display");
  var numButtons = document.getElementsByClassName("numBut");
  var numButLeft = document.getElementsByClassName("numButLeft");
  var numButRight = document.getElementsByClassName("numButRight");
  var addButton = document.getElementById("add");
  var subButton = document.getElementById("subtract");
  var multiButton = document.getElementById("multiply");
  var divideButton = document.getElementById("divide");
  var equalButton =  document.getElementById("equals");
  var clearButton = document.getElementById("clear");
  var getBalance = document.getElementById("balance");
  var depositButton = document.getElementById("deposit");
  var withdrawButton = document.getElementById("withdraw");
  var decimalButton = document.getElementById("decimal");

  for(var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", showNumber);
  }
  for(var j = 0; j < numButLeft.length; j++){
    numButLeft[j].addEventListener("click", showNumber);
  }
  for(var k = 0; k < numButRight.length; k++){
    numButRight[k].addEventListener("click", showNumber);
  }

  clearButton.addEventListener("click", clearDisplay);
  getBalance.addEventListener("click", showBalance);
  addButton.addEventListener("click", addition);
  subButton.addEventListener("click", subtraction);
  multiButton.addEventListener("click", multiplication);
  divideButton.addEventListener("click", division);
  equalButton.addEventListener("click", displayTotal);
  depositButton.addEventListener("click", deposit);
  withdrawButton.addEventListener("click", withdraw);
  decimalButton.addEventListener("click", decimal);

  function displayTotal(){
    display.style.display = "block";
    display.style.display = "inline-block";
    var toNum = parseFloat(display.innerHTML);
    if(!isNaN(toNum)){
      display1.innerHTML = "(" + display1.innerHTML + ")";
      memory.push(toNum);
      for(var i = 0; i < memory.length; i++){
        Calculator.multiply(memory);
        Calculator.divide(memory);
        Calculator.add(memory);
        Calculator.subtract(memory);
        display.innerHTML = parseFloat(memory);
      }
    }else if(isNaN(toNum)){
      display1.innerHTML = "(" + display1.innerHTML.substring(0, (display1.innerHTML.length - 1)) + ")";
      memory.splice((memory.length - 1), 1);
      for(var p = 0; p < memory.length; p++){
        Calculator.multiply(memory);
        Calculator.divide(memory);
        Calculator.add(memory);
        Calculator.subtract(memory);
        display.innerHTML = parseFloat(memory);
      }
    }
    count = 2;
    memory = [];
    decimalPlace = 1;
  }

  function addition(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0 || count === 2){
      memory.push(toNum, "+");
      display1.innerHTML += "+";
      display.innerHTML = "+";
    }
    count = 1;
    decimalPlace = 0;
  }

  function subtraction(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0 || count === 2){
      memory.push(toNum, "-");
      display1.innerHTML += "-";
      display.innerHTML = "-";
    }
    count = 1;
    decimalPlace = 0;
  }

  function multiplication(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0 || count === 2){
      memory.push(toNum, "x");
      display1.innerHTML += "x";
      display.innerHTML = "x";
    }
    count = 1;
    decimalPlace = 0;
  }

  function division(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0 || count === 2){
      memory.push(toNum, "÷");
      display1.innerHTML += "÷";
      display.innerHTML = "÷";
    }
    count = 1;
    decimalPlace = 0;
  }

  function clearDisplay(){
    display.style.display = "none";
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
    count = 1;
    decimalPlace = 0;
  }

  function showBalance(){
    display.style.display = "block";
    display.style.display = "inline-block";
    // var newBalance = Calculator.getBalance();
    // display.innerHTML = Calculator.getBalance();
    // console.log(Calculator.getBalance());
    display.innerHTML = Calculator.getBalance();
    console.log(display.innerHTML);
  }

  function decimal(){
    display.style.display = "none";
    if(count === 0 && decimalPlace === 0){
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      decimalPlace = 1;
    }else if(count === 1 && decimalPlace === 0){
      display.innerHTML = "";
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      count = 0;
      decimalPlace = 1;
    }
  }

  function showNumber(){
    display.style.display = "none";
    if(count === 0 && decimalPlace === 0){
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
    }else if(count === 1 && decimalPlace === 0){
      display.innerHTML = "";
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      count = 0;
    }else if(count === 0 && decimalPlace > 0 && decimalPlace < 3){
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      decimalPlace ++; 
    }else if(count === 1 && decimalPlace > 0 && decimalPlace < 3){
      display.innerHTML = "";
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      decimalPlace++;
    }
  }

  function deposit(){
    var total = parseFloat(display.innerHTML);
    Calculator.deposit(total);
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
  }

  function withdraw(){
    var total = parseFloat(display.innerHTML);
    Calculator.withdraw(total);
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
  }

})();