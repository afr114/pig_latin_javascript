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
