var calculator = (function(){



var memory = 0;
var total = 0;
var history = [];
var equals = ['='];
var numbers = [7,8,9,4,5,6,1,2,3,0,'00'];
var operators = ['+','-','/','*','.'];



function runElements(){
numbers.forEach(function(numbers) {
    var button = document.createElement('button');
    button.innerHTML = numbers;
    button.classList.add('number');
    button.addEventListener('click', inputFunc);
    calc.appendChild(button);
  });

operators.forEach(function(operators) {
    var button = document.createElement('button');
    button.innerHTML = operators;
    button.classList.add('operator');
    button.addEventListener('click', moveValue);
    operateRow.appendChild(button);
  });

equals.forEach(function(equals) {
    var button = document.createElement('button');
    button.innerHTML = equals;
    button.id = 'equals';
    button.addEventListener('click', calculateValue);
    operateRow.appendChild(button);
  });
}

function validate(x){
  if (typeof x !== "number"){
    throw new Error();
  }
}


function load(x){
  total = x;
}

function getTotal (){
  return total;
}


function add(x){
  total = total + x;
}

function subtract(x){
  // validate(x);
  total = total - x;
}

function multiply(x){
  // validate(x);
  total = total * x;
}

function divide(x){
  // validate(x);
  total = total / x;
}

function recallMemory(){
  return memory;
}

function saveMemory(){
  memory = total;
}

function clearMemory(){
  memory = 0;
}

function historyDeposit(x){
  history.push(x);
  saveHistory();
}

function saveHistory(){
  
  memoryHistory = history;
  
}

function viewHistory(){
  var historyPElem = document.getElementById("history");
  historyPElem.innerHTML = history;
  console.log(history);
}

function clear(){
  display.innerHTML = "";
  calculator.load(0);

}

function getBalance(){
  display.innerHTML = calculator.recallMemory();
  currentValue = "";
}

function deposit(){
  var currentBalance = parseFloat(calculator.recallMemory());
  var dollarsToDeposit = parseFloat(display.innerHTML);
  calculator.load(dollarsToDeposit + currentBalance);
  calculator.saveMemory();
  calculator.historyDeposit(dollarsToDeposit);
}

function withdraw(){
  var currentBalance = parseFloat(calculator.recallMemory());
  var dollarsToWithdraw = parseFloat(display.innerHTML);
      if(currentBalance >= dollarsToWithdraw){
      calculator.load(currentBalance - dollarsToWithdraw);
      calculator.saveMemory();
      }

}

function controls(x){
    if(x === "Clear"){
      calculator.clear();
    }
    else if(x === "Get Balance"){
      calculator.getBalance();
    }
    else if(x === "Deposit Cash"){
      calculator.deposit();
   
    }
    else if(x === "History"){
      calculator.viewHistory();
   
    }
    else if(x === "Withdraw Cash"){
      calculator.withdraw();
        }
}

function calcValue(){
  currentValue = parseFloat(currentValue);
    calculator.load(parseFloat(calculator.getTotal()));


    if (operator === "+"){
      calculator.add(currentValue);
      currentValue = "";
    }else if(operator === "-"){
      calculator.subtract(currentValue);
      currentValue = "";
    }else if(operator === "x"){
      calculator.multiply(currentValue);
      currentValue = "";
    }else if(operator === "÷"){
     calculator.divide(currentValue);
      currentValue = "";
    }

  display.innerHTML = calculator.getTotal().toFixed(2);
}

function operatorSign(){
 if (calculator.getTotal()===0){
        calculator.load(currentValue);
        currentValue = "";
        display.innerHTML = "";

    }else if(calculator.getTotal() >= 0){
        currentValue = "";
        display.innerHTML = "";
    }
}


return {

  load : load,
  getTotal : getTotal,
  add : add,
  subtract : subtract,
  multiply : multiply,
  divide : divide,
  recallMemory : recallMemory,
  saveMemory : saveMemory,
  clearMemory : clearMemory,
  historyDeposit : historyDeposit,
  saveHistory : saveHistory,
  viewHistory : viewHistory,
  clear : clear,
  getBalance : getBalance,
  deposit : deposit,
  withdraw : withdraw,
  controls : controls,
  calcValue : calcValue,
  runElements : runElements,
  operatorSign : operatorSign

  };


}());