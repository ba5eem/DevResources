var tempC = 30;
var convertC_F = tempC * (9/5);
var tempF = convertC_F + 32;
console.log(tempF);

function C_F(temp) {
  return (temp * (9/5))+32;
}

var newTemp = C_F(30);
console.log(newTemp);

var tempF = 86
var convertF_C = tempF - 32;
var tempC = (convertF_C *5)/9;
console.log(tempC);


/**
from Celsius to Fahrenheit: first multiply by 180/100, then add 32
from Fahrenheit to Celsius: first subtract 32, then multiply by 100/180
 

But 180/100 can be simplified to 9/5, 
and 100/180 can be simplified to 5/9, so this is the easiest way:

http://www.mathsisfun.com/temperature-conversion.html
**/