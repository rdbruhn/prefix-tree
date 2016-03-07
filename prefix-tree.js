var PrefixTree = function(){
  this.children = {};
  this.word = 0;
  this.freq = 0;
};

PrefixTree.prototype.add = function(val, idx){
  idx = idx || 0;
  if(idx===val.length){
    this.word++;
    return true;
  }
  if(this.children[val[idx]]===undefined){
    this.children[val[idx]] = new PrefixTree();
  }
  this.freq ++;
  this.children[val[idx]].add(val, idx + 1);
};

PrefixTree.prototype.find = function(val, idx){
  idx = idx || 0;
  if(idx === val.length){
    return true;
  }
  if(this.children[val[idx]] === undefined){
    return false;
  }else{
    return this.children[val[idx]].find(val, idx + 1);
  }
};

PrefixTree.prototype.frequency = function(){
  return this.freq;
};
