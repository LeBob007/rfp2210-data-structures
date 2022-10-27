var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

//time complexity: O(n)
setPrototype.add = function(item) {
  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

//time complexity: O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//time complexity: O(n)
setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
      break;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
