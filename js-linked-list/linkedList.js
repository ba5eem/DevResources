/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  var head = null;
  var tail = null;

  return {
    getHead : getHead,
    getTail: getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert
  };

  function getHead() {
    return head;
  }

  function getTail() {
    return tail;
  }

  function add(val) {
    var newNode = {
      value : val,
      next : null
    };

    if (!head) {      
      head = newNode;
      tail = newNode;

    } else {
      tail.next = newNode;
      tail = newNode;
    }
    return tail;
  }

  function get(index) {
    if (index < 0 || !head) {
      return false;

    } else if (index === 0) {
      return head;
    
    } else { 
      var targetNode = head;

      for (var i = 0; i < index; i++) {
        if (!targetNode.next) {
          return false;
        }

        targetNode = targetNode.next;
      }

      return targetNode;
    }
  }

  function remove(index) {
    var previousNode = get(index - 1);
    var targetNode = get(index);
    //var nextNode = get(index+1);

    if (!targetNode) {
      return false;
    
    } else if (!previousNode) {
      //head = nextNode;
      head = targetNode.next;
    
    } else if (!targetNode.next) { //OR: nextNode
      tail = previousNode;
      tail.next = null;
    
    } else {
      previousNode.next = targetNode.next;
    }
  }

  function insert(val, index) {
    var previousNode = get(index-1);
    var targetNode = get(index);
    var newNode = {
      value : val,
      next : null
    };

    if (!targetNode) {
      return false;

    } else if (!previousNode) {
      newNode.next = head;
      head = newNode;
    
    } else {
      newNode.next = targetNode;
      previousNode.next = newNode;
    }
  }
}
