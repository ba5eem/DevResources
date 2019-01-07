const memoize = (foo) => {
  console.log(arguments);
  return foo;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const add = (...rest) => rest.reduce(reducer);

const memoizeAdd = memoize(add);

console.log(memoizeAdd(5,6));