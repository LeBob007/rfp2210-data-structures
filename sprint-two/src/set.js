var Set = function() {
  var set = Object.create(setPrototype);
  //set._storage = []; // fix me
  set._storage = {}; //to make in constant time
  return set;
};

var setPrototype = {};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }

  // if (!this._storage.includes(item)) {
  //   this._storage.push(item);
  // }
};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.contains = function(item) {
  return this._storage[item] === item;
};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }

  // for (var i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     this._storage.splice(i, 1);
  //     break;
  //   }
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
