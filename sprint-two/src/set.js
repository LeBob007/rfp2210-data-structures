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

//old time complexity: O(1)
//new time complexity: O(n)
setPrototype.add = function(item) {
  // console.log(item);
  // if (this._storage[(typeof item)][item] === undefined) {
  //   this._storage[(typeof item)][item] = item;
  // }

  if (!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

//old time complexity: O(1)
//new time complexity: O(n)
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

//old time complexity: O(1)
//new time complexity: O(n)
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
