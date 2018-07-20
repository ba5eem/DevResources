function linkedListGenerator(){
  let head = null;
  let tail = null;


  getHead = () => head;
  getTail = () => tail;

  add = (val) => {
    let newNode = {
      value: val, next: null
    };
    if(!head) {
      head = newNode;
      tail = newNode;
    }
    else {
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
      let targetNode = head;

      for (let i = 0; i < index; i++) {
        if (!targetNode.next) {
          return false;
        }

        targetNode = targetNode.next;
      }

      return targetNode;
    }
  }

  function remove(index) {
    let previousNode = get(index - 1);
    let targetNode = get(index);
    //let nextNode = get(index+1);

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
    let previousNode = get(index-1);
    let targetNode = get(index);
    let newNode = {
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


  return {
    getHead : getHead,
    getTail: getTail,
    add : add,
    get : get,
    remove : remove,
    insert : insert
  };
}
