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
