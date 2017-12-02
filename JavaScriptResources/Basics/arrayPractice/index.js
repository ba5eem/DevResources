//1. Create a function that takes in an array of numbers and returns a new array with each number doubled.

var doubleArray = function(arr){
	var result = [];
	for (var i = 0; i < arr.length; i++){
		result.push(arr[i] *2);
	}
	return result;
};


//2. Create a function that takes in two arrays of numbers and returns the sum of the numbers of both arrays.

var sumArrays = function(a,b){
	var result = [];
	for (var i = 0; i < Math.max(a.length, b.length); i++) {
		result.push((a[i] + b[i]));
	}
	return result;
};

//3. Create a function that takes in a string and returns the amount of letters in the string.
var stringCount = function (str) {
	var count = str.length;
	return count;
};


//4. Create a function that takes in an array and returns the length of the array.


//5. Create a function that takes in an array of numbers and returns the sum of all numbers in the array.
var sumOfArrays = function(a){
	var result = 0;
	for (var i = 0; i < a.length; i++){
		result = result + a[i];
	}
	return result;
};



//6. Create a function that takes in an array of strings and returns an array containing each of the lenghts of the strings.


//7. Create a function that takes in an array of strings and returns the sum of the length of all characters.
var countStrings = function(str){
	for (var i = 0; i < str.length; i++){
		str.splice(i, 0, str[i].length);
	}
	return str;
};


//8. Create a function that takes in an object and returns an array of values in the object.
var arrayOfValues = function(obj){
	var arr = [];
	arr.push(obj.value);
	return array; 
};

//9. Create a function that takes in an object and returns the amount of key value pairs in the object.
var keyValues = function(obj){
	var total = 0;
	for (var i in obj){
		total ++;
	}
	return total;
};


//10. Create a function that takes in a number and returns an array with the length of that number filled with zeroes.
//11. Create a function that takes in a an array of numbers and returns a new array without the last element of the array.
//12. Create a function that takes in a string and returns an array with each characater as a value of the array.
//13. Create a function that takes in an array of strings and returns thelength of the last string in the array.
//14. Create a function that takes in an array of numbers and returns the sum of all numbers below 10.
//15. Create a function that takes in an array of strings and returns the amount of elements that have greater than 10 letters.
//16. Create a function that takes in an array of numbers and returns the product of all elements.
//17. Create a function that takes in an object and returns an array of key names in the object.
//18. Create a function that takes in an array of numbers and returns the sum of all non-negative numbers.
//19. Create a function that takes in an array of strings and returns the amount of strings that have 3 characters or less.
//20. Create a function that takes in an array of objects and returns the amount of objects in the array

