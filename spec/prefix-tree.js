/* global prefix-tree, describe, it, expect, should */

describe('prefix-tree()', function () {
  'use strict';
  var prefixTree;
  beforeEach(function(){
    prefixTree = new PrefixTree();
  });

  it('should have methods named "add" and "find", and a property named "children"', function() {
    expect(prefixTree.add).to.be.a("function");
    expect(prefixTree.find).to.be.a("function");
    expect(prefixTree.hasOwnProperty("children")).to.equal(true);
  });

  it('should add children to the prefixTree', function() {
    prefixTree.add('raw');
    expect(prefixTree.children['r']).to.exist;
  });

  it('should return true for a value that the prefixTree find', function(){
    prefixTree.add('november');
    expect(prefixTree.find('november')).to.equal(true);
    expect(prefixTree.find('novemb')).to.equal(true);
    expect(prefixTree.find('novembet')).to.equal(false);
  });
  it('should return correct frequency', function(){
      prefixTree.add('pony');
      prefixTree.add('pizza');
      expect(prefixTree.children['p'].freq).to.equal(2);
  });

  it('should return false for a value that was not added', function(){
    prefixTree.add(5);
    expect(prefixTree.find(6)).to.equal(false);
  });

  it('should be able to add children to a prefixTree\'s child', function() {
    prefixTree.add(5);
    prefixTree.children[0].add(6);
    expect(prefixTree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    prefixTree.add(5);
    prefixTree.add(6);
    prefixTree.children[0].add(7);
    prefixTree.children[1].add(8);
    expect(prefixTree.find(7)).to.equal(true);
    expect(prefixTree.find(8)).to.equal(true);
  });


  // Add more assertions here
});
