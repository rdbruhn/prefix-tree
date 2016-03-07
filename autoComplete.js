var dictionary = new PrefixTree();

dictionary.add('pizza');
dictionary.add('pie');
dictionary.add('peace');
dictionary.add('peach');
dictionary.add('peel');

var returnWord = function(string){
  if(!dictionary.find(string)){
    throw "Word not in dictionary";
    var ans = prompt("Would you like to add it (y/n)?").toLowerCase();
    if(ans === 'y'){
      dictionary.add(string);
    }
  }
};

