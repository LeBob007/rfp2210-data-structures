class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.index = 0;
    this.start = 0;
  }

  enqueue(value) {
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue() {
    if (this.start < this.index) {
      var temp = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return temp;
    }
  }

  size() {
    return this.index - this.start;
  }

}
