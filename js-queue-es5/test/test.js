var Queue = require('../lib/Queue.js');
var should = require('chai').should();

describe('Queue', function() {
  describe('Class methods', function() {
    var myQueue;
    beforeEach(function() {
      myQueue = Queue;
    });
    it('should have a size() function', function() {
      myQueue.size.should.be.a('function');
    });
    it('should have a enqueue() function', function() {
      myQueue.enqueue.should.be.a('function');
    });
    it('should have a dequeue() function', function() {
      myQueue.dequeue.should.be.a('function');
    });
    it('should have a peek() function', function() {
      myQueue.peek.should.be.a('function');
    });
  });

  describe('behavior :', function() {
    var myQueue;
    beforeEach(function() {
      myQueue = Queue;
    });
    it('A new queue should start with a size of 0', function() {
      var size = myQueue.size();
      size.should.equal(0);
    });
    it('A queue should have a size of 3 after adding 3 items', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.enqueue('c');
      myQueue.size().should.equal(3);
      myQueue.dequeue();
      myQueue.dequeue();
      myQueue.dequeue();
    });
    it('A queue should have a size of 0 after removing the previous 3 items added', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.enqueue('c');
      myQueue.dequeue();
      myQueue.dequeue();
      myQueue.dequeue();
      myQueue.size().should.equal(0);
    });
    it('Should return null when removing from an empty Queue', function() {
      var item = myQueue.dequeue();
      should.equal(item, null);
    });
    it('Size should still be 0 when removing from an empty Queue', function() {
      myQueue.dequeue();
      myQueue.size().should.equal(0);
    });
    it('Should have a size of 2 after adding 4 items and removing 2', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.enqueue('c');
      myQueue.enqueue('d');
      myQueue.dequeue();
      myQueue.dequeue();
      myQueue.size().should.equal(2);
      myQueue.dequeue();
      myQueue.dequeue();
    });
    it('The item added first should be removed', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.dequeue().should.equal('a');
      myQueue.dequeue();
    });
    it('Should remove subsequent items in FIFO order (first in first out)', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.dequeue();
      myQueue.dequeue().should.equal('b');
    });
    it('Peek should look at the first item in line without removing it', function() {
      myQueue.enqueue('a');
      myQueue.enqueue('b');
      myQueue.peek().should.equal('a');
      myQueue.dequeue().should.equal('a');
      myQueue.dequeue();
    });
    // it('Peek should return null if no items are in the queue', function() {
    //   myQueue.peek().should.equal(null);
    // });
  });
});
