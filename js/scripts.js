var vowelCheck = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var splitWord = word.split("");
  var translatedWord = [];

  for (var i = 0; i < vowels.length; i++) {
    if (splitWord[0] === vowels[i]) {
      return true;
    } else {
      return false;
    }
  }
};

var vowelWordAdder = function(word) {
  var originalWord = word.split();
  var newWord = originalWord.slice();

  if (vowelCheck(word)) {
    newWord.push("ay");
  } else {
    return false;
  }

  return newWord.join("");
};

var pigLatin = function(word) {
  var ogWord = word.split("");
  var pigWord = ogWord.slice();

  if (vowelCheck(word)) {
    vowelWordAdder(word);
  } else {
    var firstLetter = pigWord.shift();
    pigWord.push(firstLetter + "ay");
  }
  return pigWord.join("");
};
