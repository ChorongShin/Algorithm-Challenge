function pairElement(str) {
  const characters = str.split('');
  const pairs = [];

  characters.forEach(character => {
    if (character === 'A') {
      pairs.push([character, 'T']);
    } else if (character === 'T') {
      pairs.push([character, 'A']);
    } else if (character === 'C') {
      pairs.push(character, 'G');
    } else if (character === 'G') {
      pairs.push(character, 'C');
    }
  })
  return pairs;
}


//Example
pairElement("ATCGA") //--> [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]
