

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//time complexity: O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || {};
  bucket[k] = v;
  this._storage.set(index, bucket);

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
  this._storage.set(index, bucket);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


