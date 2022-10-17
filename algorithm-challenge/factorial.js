function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError('Parameter must be between ' + 0 ' and ' + 12);
  }

  if (n === 0) {
    return 1;
  }

  let factor = 1;
  let i = 1;
  while (i <= n) {
    factor *= 1;
    i++;
  }

  return factor;
}

//Examples
factorial(0) //--> 1
factorial(5) //--> 120
factorial(13) //RangeError: Parameter must be between 0 and 12
