var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var start = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++;
  };

  someInstance.dequeue = function() {
    if (start < index) {
      var temp = storage[start];
      delete storage[start];
      start++;
      return temp;
    }
  };

  someInstance.size = function() {
    return index - start;
  };

  return someInstance;
};
