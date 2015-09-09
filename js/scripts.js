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


var firstVowel = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var ogWord = word.split("");
  var pigWord = ogWord.slice();
  var firstVowel = 0;

  for (var j = 0; j < pigWord.length; j++) {
    for (var k = 0; k < vowels.length; k++) {
      if (vowels[k] === pigWord[j]) {
        return firstVowel = pigWord.indexOf(vowels[k]);
      }
    }
  }
};


var pigLatinWord = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var ogWord = word.split("");
  var pigWord = ogWord.slice();
  var firstVowelPosition = (firstVowel(word));

  if (vowelCheck(word)) {
    vowelWordAdder(word);
  } else {
    var firstLetters = pigWord.splice(0, firstVowelPosition);
    return pigWord.join("") + (firstLetters.join("") + "ay");
  }
};

var pigLatin = function(phrase) {
  var newPhrase = [];
  var splitPhrase = phrase.split(" ");

  splitPhrase.forEach(function(word) {
    newPhrase.push(pigLatinWord(word));
  })
  return newPhrase.join(" ");
};




$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase);

    $("#pig-latin-phrase").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
