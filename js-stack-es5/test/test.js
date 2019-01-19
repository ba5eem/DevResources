var Stack = require('../lib/Stack.js');
var should = require('chai').should();
describe('Stack', function() {
  describe('Class methods', function() {
    beforeEach(function() {
      myStack = Stack;
    });
    it('should have a push() function', function() {
      myStack.push.should.be.a('function');
    });
    it('should have a pop() function', function() {
      myStack.pop.should.be.a('function');
    });
    it('should have a size() function', function() {
      myStack.size.should.be.a('function');
    });
  });

  describe('Stack behavior', function() {
    beforeEach(function() {
      myStack = Stack;
    });
    it('A new stack should start with a size of 0', function() {
      var size = myStack.size();
      size.should.equal(0);
    });
    it('A stack should have a size of 3 after adding 3 items', function() {
      myStack.push('a');
      myStack.push('b');
      myStack.push('c');
      myStack.size().should.equal(3);
      myStack.pop();
      myStack.pop();
      myStack.pop();
    });
    it('A stack should have a size of 0 after removing the previous 3 items added', function() {
      myStack.push('a');
      myStack.push('b');
      myStack.push('c');
      myStack.pop();
      myStack.pop();
      myStack.pop();
      myStack.size().should.equal(0);
    });
    it('Should return null when removing from an empty Stack', function() {
      var popped = myStack.pop();
      should.equal(popped, null);
    });
    it('Size should still be 0 when removing from an empty Stack', function() {
      myStack.pop();
      myStack.size().should.equal(0);
    });
    it('Should have a size of 2 after adding 4 items and removing 2', function() {
      myStack.push('a');
      myStack.push('b');
      myStack.push('c');
      myStack.push('d');
      myStack.pop();
      myStack.pop();
      myStack.size().should.equal(2);
      myStack.pop();
      myStack.pop();
    });
    it('The most recently added item should be removed', function() {
      myStack.push('a');
      myStack.push('b');
      myStack.pop().should.equal('b');
    });
    it('Removes most recent item, after newer items have already been added and removed', function() {
      myStack.push('a');
      myStack.push('lollerskates');
      myStack.pop();
      myStack.pop().should.equal('a');
    });
  });
});
