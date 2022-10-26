var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.index = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

stackMethods.pop = function() {
  this.index--;
  if (this.index < 0) {
    this.index = 0;
  }
  return this.storage[this.index];
};

stackMethods.size = function() {
  return this.index;
};
