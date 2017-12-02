


var jsMethod = (function(){
      
  var description;
  
  //Below function includes all else if to return correct data based off method search - please dont edit this code - currently working.
  function getDescription(str) {
    if(str == 'push'){
    description = 'Adds new elements to the end of an array, and returns the new length';

    }
    else if(str === 'pop') {
      description = "Removes the last element of an array, and returns that element";
      
    }

    else if(str === 'reverse') {
      description = "Reverses the order of the elements in an array";
      
    }

    else if(str === 'shift') {
      description = "Removes the first element of an array, and returns that element";
    }

    else if(str === 'sort') {
      description = "Sorts the elements of an array";
    }

    else if(str === 'splice') {
      description = "Adds/Removes elements from an array";
    }

    else if(str === 'unshift') {
      description = "Adds new elements to the beginning of an array, and returns the new length";
    }

    else if(str === 'concat') {
      description = "Joins two or more arrays, and returns a copy of the joined arrays";
    }

    else if(str === 'join') {
      description = "Joins all elements of an array into a string";
    }

    else if(str === 'slice') {
      description = "Selects a part of an array, and returns the new array";
    }

    else if(str === 'indexOf') {
      description = "Search the array for an element and returns its position";
    }

    else if(str === 'lastIndexOf') {
      description = "Search the array for an element, starting at the end, and returns its position";
    }

    else if(str === 'toString') {
      description = "Converts and array to a string, and returns the results";
    }

    else {
      description = "Please check your spelling and remember the method is case sensitive for example: incorrect: 'indexof' correct: 'indexOf'";
    }

    return description;
    
  }

  function replaceP(){
    var input = document.getElementById('myInput').value;
    var result = getDescription(input);
    var pElem = document.getElementById('result').innerHTML = result;

  }
  
  function funcExample(str){
    if(str == 'push'){
    description = "var fruits = ['banana','orange']<br>fruits.push('kiwi')<br>result: ['banana','orange','kiwi']";
    }
    else if(str === 'pop') {
      description = "var fruits = ['figs','pear','apple']<br>fruits.pop();<br>removes ('apple')";
      
    }

    else if(str === 'reverse') {
      description = "var fruits = ['figs','pear','apple']<br>fruits.reverse();<br>result: apple,pear,figs";
      
    }

    else if(str === 'shift') {
      description = "var fruits = ['figs','pear','apple']<br>fruits.shift();<br>result: pear, apple";
    }

    else if(str === 'sort') {
      description = "var fruits = ['mango','banana','apple']<br>fruits.sort()<br>result:apple, banana, mango";
    }

    else if(str === 'splice') {
      description = "var fruits = ['banana','orange','apple','mango']<br>fruits.splice(2,0,'lemon','kiwi');<br>result: banana, orange, lemon, kiwi, apple, mango";
    }

    else if(str === 'unshift') {
      description = "var fruits = ['banana','orange','apple','mango']<br>fruits.unshift('lemon','kiwi');<br>result: lemon, kiwi, banana, orange, apple, mango";
    }

    else if(str === 'concat') {
      description = "var one = ['Batman','SuperMan']<br>var two = ['Flash','Aquaman']<br>result: Batman, SuperMan, Flash, Aquaman";
    }

    else if(str === 'join') {
      description = "var fruits = ['banana','orange','apple','mango']<br>fruits.join();<br>result: banana, orange, apple, mango";
    }

    else if(str === 'slice') {
      description = "var fruits = ['banana','orange','lemon','mango']<br>var citrus = fruits.slice(1,3);<br>result: orange, lemon";
    }

    else if(str === 'indexOf') {
      description = "var fruits = ['banana','orange','apple','mango']<br>var a = fruits.indexOf('apple');<br>result: 2";
    }

    else if(str === 'lastIndexOf') {
      description = "var fruits = ['banana','orange','apple','mango']<br>var a = fruits.lastIndexOf('apple');<br>result: 2";
    }

    else if(str === 'toString') {
      description = "var fruits = ['banana','orange','apple','mango']<br>fruits.toString();<br>result: banana, orange, apple, mango";
    }

    else {
      description = "finish typing please";
    }

    return description;
  }
  
  
  
  function codeExample(){
    var input = document.getElementById('myInput').value;
    var result = funcExample(input);
    var pElem = document.getElementById('codeExample').innerHTML = result;
  }
  
  function callAll(){
    replaceP();
    codeExample();
  }

  
  
  return{
    getDescription: getDescription,
    replaceP: replaceP,
    codeExample: codeExample,
    funcExample: funcExample,
    callAll: callAll
  }
           
           
           
        
           
 })()


 function myFunction(){
  jsMethod.callAll();
}


var jsGame = (function(){

var game = 0;


function myTest(){

 var input = document.getElementById('myAnswer').value;
 if (input === "push('kiwi')"){
    game ++;
    document.getElementById('scoreTotal').innerHTML = "Correct!" + "(" + game + "point!)";
  }
  else {
    document.getElementById('scoreTotal').innerHTML = "Keep Trying!";
  }
}

function callAll(){
  myTest();
}


return {
  myTest: myTest,
  callAll: callAll
};





 })();

 function myFunctionTest(){
  jsGame.callAll();
}







