class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    var nodeToAdd = Node(value);

    if (this.head === null) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      var tempNode = this.tail;
      this.tail.next = nodeToAdd;
      this.tail = this.tail.next;
      this.tail.prev = tempNode;
    }
  }

  removeHead() {
    if (this.head === null) {
      return null;
    }
    var oldHead = this.head.value;

    if (this.head.next === null) {
      this.tail = this.tail.next;
    }
    this.head = this.head.next;
    this.head.prev = null;
    return oldHead;
  }

  contains(target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  addToHead(value) {
    var nodeToAdd = Node(value);


  }

  removeTail() {
    if (this.tail === null) {
      return null;
    }
    var oldTail = this.tail.value;

  }

}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
