const _storage = {};
let _start = 0;
let _end = 0;

const size = () => _end - _start;
const init = (item) => _storage[_end] = item;

const enqueue = item => {
  init(item);
  _end ++;
  return size();
};
const del = () => delete _storage[_start];


const remove = () => {
  var done = _storage[_start];
  del();
  _start ++;
  return done;

}

const dequeue = () => size() === 0 ? null : remove();
const peek = () => size() === 0 ? null : _storage[_start];

module.exports = { size, enqueue, dequeue, peek };
