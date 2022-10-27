

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
//time complexity: O(1)
Graph.prototype.addNode = function(node) {
  this.storage[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//time complexity: O(1)
Graph.prototype.contains = function(node) {
  return this.storage[node] !== undefined;
};

// Removes a node from the graph.
//time complexity: O(n)
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage[node].length; i++) {
    this.removeEdge(node, this.storage[node][i]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//time complexity: O(n) (based off includes)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
//time complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
//time complexity: O(n)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    var toIndex = this.storage[fromNode].indexOf(toNode);
    var fromIndex = this.storage[toNode].indexOf(fromNode);
    this.storage[fromNode].splice(toIndex, 1);
    this.storage[toNode].splice(fromIndex, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
//time complexity: O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb.call(this, key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


