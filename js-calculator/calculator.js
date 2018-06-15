
var calculatorModule = (function(){
  var memory = 0;
  var total = 0;

  var calculator = {
    load: setTotal,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: recallMemory,
    saveMemory: saveMemory,
    clearMemory: clearMemory
  };

   function setTotal(x){
    validate(x);
    total = x;
    return total;
   }


   function getTotal(){
    return total;
   }


   function add(x){
    validate(x);
    total += x;
   }


   function subtract(x){
    validate(x);
    total -= x;
   }


   function multiply(x){
    validate(x);
    total *= x;
   }


   function divide(x){
    validate(x);
    total /= x;
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

   function validate(x){
    if(typeof x !== "number"){
      throw TypeError("Invalid input");
    }
   }

   return calculator;

  });
