describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add strings to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.add(1);
    set.remove(1);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(1)).to.equal(false);
  });

  it('should add numbers to a set', function() {
    set.add(1);
    set.add(2);
    expect(set.contains(2)).to.equal(true);
    expect(set.contains(1)).to.equal(true);
  });

  it('should add booleans to a set', function() {
    set.add(true);
    set.add(false);
    expect(set.contains(false)).to.equal(true);
    expect(set.contains(true)).to.equal(true);
  });
});
