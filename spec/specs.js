describe('vowelCheck', function() {
  it('check if word starts with a vowel', function() {
    expect(vowelCheck("andrew")).to.equal(true);
  });
});

describe('vowelWordAdder', function() {
  it('adds the characters ay to the end of a sentence if the first letter is a vowel', function() {
    expect(vowelWordAdder("andrew")).to.equal("andreway");
  });
});




describe("pigLatin", function() {
  it('translates word to pig latin with one consonant', function() {
    expect(pigLatin("yellow")).to.equal("ellowyay");
  });

  it('translates word to pig latin with prefixes containing two or more non-vowel letters', function() {
    expect(pigLatin("classwork")).to.equal("assworkclay");
  });
});
