var BinarySearchTree = function(value) {
  var binarySearchTree = Object.create(bstMethods);
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;
  return binarySearchTree;
};

var bstMethods = {};

//if value > this.value, check if this.right is null
//  if null, this.right = BinarySeartchTree(value)
//  else, this.right.insert(value);
//if value < this.value, check if this.left is null
//  if null, this.left = BinarySearchTree(value)
//  else, this.left.insert(value)
//time complexity: O(log(n))
bstMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }


};

//if value === this.value, return true
//else
//  if value < this.value, return contains on this.left
//  else if value > this.value, return contains on this.right
// return false
//time complexity: O(log(n))
bstMethods.contains = function(value) {
  if (value === this.value) {
    return true;
  } else {
    if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    } else if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    }
  }
  return false;
};
//call cb on current node
//if left is not null, call dfl on left
//if right is not null, call dfl on right
//time complexity: O(n)
bstMethods.depthFirstLog = function(cb) {
  cb.call(this, this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

bstMethods.removeAllChildren = function(value) {
  if (this.value === value) {
    this.left = null;
    this.right = null;
  } else if (value > this.value && this.right !== null) {
    this.right.removeAllChildren(value);
  } else if (value < this.value && this.left !== null) {
    this.left.removeAllChildren(value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
