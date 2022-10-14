function shortcut(string) {
  const vowels = 'aeiou'
  string = string.split('')

  const letters = string.filter(letter => !vowels.includes(letter))

  return letters.join('')
}

//Example
shortcut('hello') //--> 'hll
