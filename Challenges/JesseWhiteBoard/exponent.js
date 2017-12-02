//Jesse's example:

var power = function(x){
	return function(n){
      return Math.pow(n,x);	
	};
};

var powTwo = power(3);
console.log("Jesse Example:" + powTwo(4));

//My first attempt:
var power = function(n,x){
	var exp = Math.pow(n,x);
	return function(){
		return exp;
	};
};


var test = power(4,3)();
console.log("Baseems example: " +test);

//For loop example from kevin:
function toPower(exponent){
  return function(number){
    var num = 1;
    for(var i = 0; i < exponent; i++){
      num *= number;
    }
    return num;
  };
}

var powpow = toPower(3);
console.log("Kevins example: "+powpow(4));

//closure examples:
//Jesse's example:
var power = function(exponent){//power(2)
	return function(base){//powTwo(4)
      austinPowers()();
      withOutReturn()()();
      return Math.pow(base,exponent);//(4,2)	
	};
};

var powTwo = power(2);
var powThree = power(3);
console.log(powTwo(3));
console.log(powTwo(3));
console.log(powThree(3));

function austinPowers(){
    return function(){
     console.log("hello world");
    }
}
function withOutReturn(){
  return function(){//1st return
     return function(){//2nd return
     console.log("hello world");
    }
    }
}