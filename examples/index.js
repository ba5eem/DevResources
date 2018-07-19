const a = {a: 'ola'}
const b = {a: 'hola'}

Object.prototype.ola = function(){
  console.log(this.a);
};

console.log(Object);