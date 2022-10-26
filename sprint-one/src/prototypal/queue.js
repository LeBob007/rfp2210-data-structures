var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.start = 0;
  queue.index = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

queueMethods.dequeue = function() {
  if (this.start < this.index) {
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.index - this.start;
};
