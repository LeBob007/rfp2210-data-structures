describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('UPDATE: should have methods named "insert", "contains", "depthFirstLog", "removeAllChildren", and "breadthFirstLog"', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.removeAllChildren).to.be.a('function');
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('NEW TEST: should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    binarySearchTree.removeAllChildren(2);
    expect(binarySearchTree.contains(3)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });

  it('NEW TEST: should correctly balance an unbalanced tree', function() {
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0);
    expect(binarySearchTree.max).to.equal(6);
    expect(binarySearchTree.min).to.equal(2);
    binarySearchTree = binarySearchTree.balanceTree();
    expect(binarySearchTree.max).to.equal(4);
    expect(binarySearchTree.min).to.equal(4);
  });
});
