function diamond(n) {
  if (n % 2 === 0 || n < 1) {
    return null;
  }

  let space = 0;
  let result = '*'.repeat(n) + '\n';

  for (let i = n - 2; i >= 1; i -= 2) {
    let nextRow = ' '.repeat(++space) + "*".repeat(i) + '\n'
    result = nextRow + result + nextRow;
    }
  return result;
}

//Examples
diamond(2) // null
diamond(1) //'*\n'
diamond(3) //" *\n***\n *\n"
