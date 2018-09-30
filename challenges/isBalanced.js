'use strict';

function braces(values) {
  var i;
  var result = [];
  var len = values.length;

  for (i = 0; i < len; i++) {
    if (isBalanced(values[i])) {
      result.push('YES');
    } else {
      result.push('NO');
    }
  }
  return result;
}

function isBalanced(str) {
  var i, ch;

  var bracketsMap = new Map();
  bracketsMap.set(']', '[');
  bracketsMap.set('}', '{');
  bracketsMap.set(')', '(');

  // Use the spread operator to transform a map into a 2D key-value Array.
  var closingBrackets = [...bracketsMap.keys()];
  var openingBrackets = [...bracketsMap.values()];

  var temp = [];
  var len = str.length;

  for (i = 0; i < len; i++) {
    ch = str[i];

    if (openingBrackets.indexOf(ch) > -1) {
      temp.push(ch);
    } else if (closingBrackets.indexOf(ch) > -1) {

      var expectedBracket = bracketsMap.get(ch);
      if (temp.length === 0 || (temp.pop() !== expectedBracket)) {
        return false;
      }

    } else {
      // Ignore the characters which do not match valid Brackets symbol
      continue;
    }
  }

  return (temp.length === 0);
}

var i1 = [
  "{}[]()",
  "{[}]"
];

var i2 = [
  "{[}]",
  "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]",
  "{}[]()"
];

console.log(braces(i1)); // ["YES","NO"]
console.log(braces(i2)); // ["NO","YES","YES"]