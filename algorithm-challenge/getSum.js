function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let sum = 0;

  if (a < b) {
    while (a <= b) {
      sum += a;
      a++;
    }
  } else if (a > b) {
    while (b <= a) {
      sum += b;
      b+=;
    }
  }
  return sum;
}


getSum(1, 0) //--> 1
getSum(1, 1) // --> 1
getSum(-1, 0) // --> -1
getSum(-1, 2) // --> 2
