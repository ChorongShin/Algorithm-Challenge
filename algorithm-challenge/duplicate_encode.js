const duplicateEncode(word) => {
  const letterCount = {};
  const letters = word.toLowerCase().split('');

  letters.forEach(letter => {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  })

  return letters.map(letter => {
    return letterCount[letter] === 1 ? '(' : ')';
  }).join('');
}
