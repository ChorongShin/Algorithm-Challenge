function countBy(x, n) {
  let z = [];
  let i = 1;

  while (i <= n) {
    z.push(i * x);
    i++;
  }
  return z;
}


//Examples
countBy(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
countBy(2, 5) // [2, 4, 6, 8, 10]
