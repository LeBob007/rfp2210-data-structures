var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
//create newTree node with value
//push newTree into child array
//time complexity: O(1)
treeMethods.addChild = function(value) {
  var newTree = Tree(value);
  this.children.push(newTree);
  newTree.parent = this;
};
//check if node is target
//if it is, return node
//else
//  if it has children, callback on currentnode.children
//
//time complexity: O(n)
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};

//time complexity: O(n)
treeMethods.traverse = function(cb) {
  this.children.forEach(function (child) {
    cb.call(this, child.value);
    if (child.children.length !== 0) {
      child.traverse(cb);
    }
  });
};

//time complexity: O(n)
treeMethods.removeFromParent = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      this.children[i].parent = null;
      var tempChild = this.children[i];
      this.children.splice(i, 1);
      return tempChild;
    } else {
      return this.children[i].removeFromParent(target);
    }
  }
  return null;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
