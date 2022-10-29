

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.count = 0;
};

//time complexity: O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var keyExists = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple [1] = v;
      keyExists = true;
    }
  }

  if (!keyExists) {
    var tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
    this.count++;
    if (this.count > this._limit * 0.75) {
      this.count = 0;
      this._limit *= 2;
      var oldStorage = this._storage;
      this._storage = new LimitedArray(this._limit);
      var hash = this;
      oldStorage.each(function(bucket) {
        bucket = bucket || [];
        bucket.forEach(function(tuple) {
          hash.insert(tuple[0], tuple[1]);
        });
      });
    }
  }


};

//time complexity: O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
};

//time complexity: O(n)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var value = tuple[1];
      bucket.splice(i, 1);
      this.count--;
      if (this.count < this._limit * 0.25) {
        this._limit = this._limit * 0.5;
        var oldStorage = this._storage;
        this._storage = LimitedArray(this._limit);
        var hash = this;
        oldStorage.each(function(bucket) {
          bucket = bucket || [];
          bucket.forEach(function (tuple) {
            hash.insert(tuple[0], tuple[1]);
          });
        });
      }
      return value;
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


