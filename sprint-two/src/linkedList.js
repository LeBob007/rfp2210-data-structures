var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  //create a node
  //if there's no head, set head to new node
  //tail node.next is set to new node
  //tail node now points to the new node

  //time complexity: O(1)
  list.addToTail = function(value) {
    var nodeToAdd = Node(value);

    if (this.head === null) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
    } else {
      this.tail.next = nodeToAdd;
      this.tail = nodeToAdd;
    }
  };

  //time complexity: O(1)
  list.removeHead = function() {
    var oldHead = this.head.value;

    if (this.head.next === null) {
      this.tail = this.tail.next;
    }
    this.head = this.head.next;
    return oldHead;
  };

  //time complexity O(n)
  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
