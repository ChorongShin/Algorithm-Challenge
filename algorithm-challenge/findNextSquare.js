function findNextSquare(sq) {
  const num = Math.sqrt(sq) + 1;
  if (Number.isInteger(num)) {
    return Math.pow(num, 2);
  }
  return -1;
}


//Examples

findNextSquare(121) // --> 144
findNextSquare(625) // --> 676
findNextSquare(114) // --> -1 since 114 is not a perfect square
