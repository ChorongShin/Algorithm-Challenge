function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}


//Examples
expressionMatter(1, 1, 1) //--> 3
expressionMatter(1, 2, 3) //--> 9
