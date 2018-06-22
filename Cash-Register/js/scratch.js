
function displayTotal(){
  var toNum = parseFloat(display.innerHTML);
  memory.push(toNum);
  console.log(memory);
  console.log(equation);
  Calculator.multiply(memory);
  Calculator.divide(memory);
  Calculator.add(memory);
  Calculator.subtract(memory);
 
  display.innerHTML = memory;
    
  count = 1;
  memory = [];
  }

function addition(){
  var toNum = parseFloat(display.innerHTML);
  memory.push(toNum, "+");
  equation += "+";
   
  console.log(memory);
    
  count = 1;
  }

function showNumber(){
  if(count === 0){
    display.innerHTML += this.innerHTML;
    equation += this.innerHTML;

  }else if(count === 1){
    display.innerHTML = "";
    display.innerHTML += this.innerHTML;
    equation+= this.innerHTML;
    count = 0;
  }
}