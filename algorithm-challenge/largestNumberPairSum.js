function largestNumberPairSum(numbers) {
  const order = numbers.sort((a, b) => b - a);
  return order[0] + order[1];
}

//Examples
largestNumberPairSum([10, 3, 23, 19, 5, 13]) // --> 23 + 19 = 42;
largestNumberPairSum([15, 30, 100, -3, -30]) //--> 100 + 30 = 130;
