

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

//time complexity: O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || {};
  if (bucket[k] === undefined) {
    this.count++;
  }
  bucket[k] = v;
  this._storage.set(index, bucket);
  // if (this.count > this._limit * 0.75) {
  //   this._limit *= 2;
  // }
};

//time complexity: O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  return bucket[k];
};

//time complexity: O(n)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  delete bucket[k];
  this.count--;
  this._storage.set(index, bucket);
  // if (this.count < this._limit * 0.25) {
  //   this._limit /= 2;
  // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


