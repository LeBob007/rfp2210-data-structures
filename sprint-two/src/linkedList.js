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

    if (list.head === null) {
      list.head = nodeToAdd;
      list.tail = nodeToAdd;
    } else {
      list.tail.next = nodeToAdd;
      list.tail = nodeToAdd;
    }
  };

  //time complexity: O(1)
  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var oldHead = list.head.value;

    if (list.head.next === null) {
      list.tail = list.tail.next;
    }
    list.head = list.head.next;
    return oldHead;
  };

  //time complexity O(n)
  list.contains = function(target) {
    var currentNode = list.head;
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
