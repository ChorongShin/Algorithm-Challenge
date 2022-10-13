function duplicateCount(text) {
  text = text.toLowerCase().split('').sort();
  const arr = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i + 1]) {
      arr.push(text[i]);
    }
  }

  const duplicates = arr.filter((item, index) => {
    reutrn index === arr.indexOf(item)
  })

  return duplicates.length;
}


//Examples
duplicateCount("aabBcde") //--> 2, a, b
duplicateCount("Indivisibility") // --> 1, i
duplicateCount("Indivisibilities") // --> 2, i,s
