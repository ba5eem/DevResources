'use strict';
module.exports = function() {
  let vault = {};

  function setValue(key, value){
    vault[key] = value;
  }

  function getValue(key){
    if (vault[key] === undefined){

      return null;
    }else{

      return vault[key];
    }
  }
  return {
  setValue:setValue,
  getValue:getValue
  };
};