/**
 * Queue Class
 * -----------------------------
 * A Queue data structure implemented as an ES6 class
 *
 * A queue is a data structure in which the first element is inserted from one end called
 * REAR (also called tail), and the deletion of existing element takes place from the other
 * end called as FRONT (also called head).  This makes queue a FIFO (first in first out), or
 * the element that is inserted first will always be the first to be removed.
 * You will be using an Object as an internal datastore.  Do not use an Array!
 *
 * There should be a constructor method with no arguments.
 *
 * Note that the _storage Object is OPTIONAL as there is a way to implement this exercise
 * without the _storage Object.
 *
 * @private {object} _storage              Default value should be an empty object. (Optional)
 * @private {number} _front                Default value should be set null.
 * @private {number} _back                 Default value should be set null.
 *
 */

 class Queue{
     constructor(){
         this._storage = {};
         this._front = null;
         this._back = null;
     }

     size(){
         console.log("size this._back: " + this._back);
        if(this._back === null){
            console.log("setting size to 0")
            this._back = 0;
            return this._back;
        }
        else{
            return this._back;
        }
     }

     enqueue(item){
         console.log("item: " + item);
         console.log("before enqueue this._back: " + this._back);

         if(this._back === null){
             //Set the new queue to start from 0
             console.log("enqueue: setting size to 0");
             this._back = 0;
             console.log("enqueue set this._back: " + this._back);
             //Set the front/head element to be the first element that enters
             this._front = this._back;
         }

         this._storage[this._back] = item;
         this._back++;
         console.log("after enqueue this._back: " + this._back);
     }

     dequeue(){
         if(this._front === null){
             console.log("dequeue Empty queue, returning null");
             return null;
         }
         else{
             console.log("dequeue before this._front: " + this._front);
             let dequeuedItem = this._storage[this._front];

             //Set the new front/head to be the element behind the first element to be removed. Decrease the size of the queue by 1
             this._front++;
             console.log("dequeue after this._front: " + this._front);
             console.log("dequeue before this._back: " + this._back);
             this._back--;
             console.log("dequeue after this._back: " + this._back);


             return dequeuedItem;
         }
     }

     peek(){
         console.log("peek this._front: " + this._front);
         console.log("peek this._back: " + this._back);
         if(this._back === null){
             console.log("entered");
             return null;
         }
         else{
            let peekItem = this._storage[this._front];
            return peekItem;
         }

     }
 }


  /**
   * Queue Class Method => size()
   * -----------------------------
   * Returns the size of the queue.
   *
   * @name size
   * @return {Number}
   */

  /**
   * Queue Class Method => enqueue(item)
   * -----------------------------
   * Puts an item in the queue.
   *
   * @name enqueue
   * @param item
   * @return {Number} returns the new size
   */

  /**
   * Queue Class Method => dequeue()
   * -----------------------------
   * Takes an item off the queue and returns it.
   *
   * @name dequeue
   * @return {Object}   Note that everything in javascript is an Object.
   */

   /**
   * Queue Class Method => peek()
   * -----------------------------
   * Returns the value of the first element without dequeueing.
   *
   * @name peek
   * @return {Object}   Note that everything in javascript is an Object.
   */

module.exports = Queue;