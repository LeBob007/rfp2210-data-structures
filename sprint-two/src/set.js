var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  // set._storage = {
  //   'number': {},
  //   'boolean': {},
  //   'string': {}
  // }; //to make in constant time
  return set;
};

var setPrototype = {};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.add = function(item) {
  // console.log(item);
  // if (this._storage[(typeof item)][item] === undefined) {
  //   this._storage[(typeof item)][item] = item;
  // }

  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//time complexity: O(n)
//new time complexity: O(1)
setPrototype.remove = function(item) {
  // if (this._storage[(typeof item)][item] !== undefined) {
  //   delete this._storage[(typeof item)][item];
  // }


  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
      break;
    }
  }
};

// setPrototype.hashFix = function(item) {
//   if (typeof item === 'number') {
//     return item + 'a';
//   }
// };
/*
 * Complexity: What is the time complexity of the above functions?
 */
