/**
 * Stack
 * -----------------------------
 * Creates a stack data structure.
 *
 * A stack is a data structure that allows adding and removing elements in a particular order
 * Everytime an item is added, it goes to the top of the 'stack' Everytime an item is removed,
 * the item on the top of the stack is removed.  A stack is a LIFO (last in first out) structure.
 *
 * @private {object} _storage              Default value should be an empty object.
 * @private {number} _size                 Default value should be set 0.
 */
const _storage = {};
let _size = 0;

/**
 * Method => size()
 * -----------------------------
 * Returns the size of the stack.
 *
 * @name size
 * @return {Number}
 */
const size = () => {
  // Your code here.
  return _size;
};

/**
 * Method => push(item)
 * -----------------------------
 * Puts an item on top of the stack structure.
 *
 * @name push
 * @param item
 */
const push = item => {
  // Your code here.
  _storage[_size] = item;
  _size ++;
};

/**
 * Method => pop()
 * -----------------------------
 * Takes an item off the top of the stack and returns the item.
 *
 * @name pop
 * @return {Object}   Note that everything in javascript is an Object.
 */
const pop = () => {
  // Your code here.
  if(_size === 0){
    return null;
  }
  else {
    delete _storage[_size];
    _size --;
    return _storage[_size];
  }

};

module.exports = {
  push,
  pop,
  size
};
