class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //time complexity: O(1)
  addToTail(value) {
    var nodeToAdd = new DoubleNode(value);

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

  //time complexity: O(1)
  removeHead() {
    if (this.head === null) {
      return null;
    }
    var oldHead = this.head.value;

    if (this.head.next === null) {
      this.tail = this.tail.next;
    }
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    }
    return oldHead;
  }

  //time complexity: O(n)
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

  //time complexity: O(1)
  addToHead(value) {
    var nodeToAdd = new DoubleNode(value);

    if (this.tail === null) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      var tempNode = this.head;
      this.head.prev = nodeToAdd;
      this.head = this.head.prev;
      this.head.next = tempNode;
    }
  }

  //time complexity: O(1)
  removeTail() {
    if (this.tail === null) {
      return null;
    }
    var oldTail = this.tail.value;

    if (this.tail.prev === null) {
      this.head = null;
    }
    this.tail = this.tail.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    }
    return oldTail;
  }

}

class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
