function seriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

//Examples
seriesSum(0) // --> 0.00
seriesSum(1) // --> 1.00
seriesSum(2) // --> 1.25
seriesSum(3) // --> 1.39
seriesSum(4) // --> 1.49
