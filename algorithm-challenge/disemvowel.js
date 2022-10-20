function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let sentence = '';

  const arr = str.split('');
  const result = arr.map(letter => {
    if (!vowels.includes(letter)) {
      sentence += letter;
    }
  })
  return sentence
}

//Alternative solution
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


//Example
disemvowel('Hello World') // 'Hll Wrld'
