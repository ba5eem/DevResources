function linkedListGenerator(){ // lets begin
  let head = null; // start as null
  let tail = null; // start as null


  getHead = () => head; //😒
  //console.log("Line 7: head="+head); // null
  getTail = () => tail; //🐒
  //console.log("Line 9: tail="+tail); // null

  add = (val) => {
    let newNode = {
      value: val,
      next: null
    };
    //console.log("Line 16: newNode=",newNode) // {value: "http://slashdot.org", next: null}
    if(!head) { //😒
      head = newNode; // {value: "http://slashdot.org", next: null} //😒
      tail = newNode; // {value: "http://slashdot.org", next: null} //🐒
      //console.log(head === tail) // true
    }
    else {
      //console.log("Line 23: ",newNode); // {value: "http://devleague.com", next: null}
      tail.next = newNode;
      //console.log("Line 25: ",tail.next); // {value: "http://devleague.com", next: null}
      tail = newNode;
    }
    //console.log("Line 28: ", tail); // {value: "http://devleague.com", next: null}
    return tail; //🐒
  }



  function get(index) {
    //console.log("Line 33: ", index); //0,1,2,3...
    if (index < 0 || !head) {
      //console.log("Line 35: 😒 ", head); //{value: "Ready Player One", next: {…}}
      //console.log("Line 36: 😒⏭️ ", head.next); //{value: "1982", next: {…}}
      //console.log("Line 37: 😒⏭⏭", head.next.next); //{value: "Neuromancer", next: {…}}
      //console.log("Line 38: 😒⏭⏭⏭", head.next.next.next); //{value: "Snow Crash", next: null}
      //console.log("Line 39: 😒⏭⏭⏭🐒", head.next.next.next.next); //null
      return false;

    } else if (index === 0) {
      return head; //😒

    } else {
      let targetNode = head; //😒
      //console.log("Line 49: ", targetNode); // {value: "news.ycombinator.com", next: {…}}

      for (let i = 0; i < index; i++) {
        if (targetNode.next === null) {
          return false;
        }

        targetNode = targetNode.next;
      }
      //console.log("Line 58: ", targetNode); // {value: "mozilla.org", next: {…}}
      return targetNode;
    }
  }

  function remove(index) {
    let previousNode = get(index - 1);
    console.log("previousNode: ",previousNode);
    let targetNode = get(index);
    console.log("targetNode: ",targetNode);

    if (!targetNode) { // if false *2
      return false;
    }
    else if (!previousNode) { // if false *2
      //head = nextNode;
      head = targetNode.next;
    }
    else if (targetNode.next === null) { // *2 OR: nextNode
      tail = previousNode;
      console.log("tail: ", tail) // *4
      tail.next = null;
    }
    else {
      previousNode.next = targetNode.next;
    }
  }





  function insert(val, index) {
    let previousNode = get(index-1); // {} || false
    let targetNode = get(index); // {} || false
    let newNode = {
      value : val,
      next : null
    };

    if (!targetNode) {
      return false;

    }
    else if (!previousNode) {
      newNode.next = head;
      head = newNode;

    }
    else {
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
