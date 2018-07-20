class Stack {
  constructor(){
      this._storage = {};
      this._size = 0;
  }

  size() {
      return this._size;
  }

  push(item) {
    console.log(this._storage[this.size()] = item);


      this._storage[this.size()] = item;
      console.log(this._storage)
      this._size ++;
  }

  pop() {
      if (this._size === 0) {
          return null;
      }else{
          delete this._storage[this.size()];
          this._size --;
          return this._storage[this.size()];
      }

  }
}


module.exports = Stack;