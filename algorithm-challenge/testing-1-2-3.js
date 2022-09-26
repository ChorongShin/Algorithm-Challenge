function number (array) {
  return array.map((letter, index) => {
    return `${index + 1}: letter`;
  })
}


//Examples
number([a, b, c]) //=> ['1: a', '2: b', '3: c']
number([]) //=> []
