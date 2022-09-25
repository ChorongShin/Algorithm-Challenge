function uniqueInOrder(iterable) {
  const arr = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
}

//Examples
uniqueInOrder('AAAABBBCCDAABBB') // => ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') // => ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) // => [1,2,3]
