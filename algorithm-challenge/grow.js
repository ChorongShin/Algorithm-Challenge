function grow(x) {
  return x.reduce((total, current) => {
    return total * current;
  }, 1)
}


//Example:
grow([1,2,3,4]) //->  1 * 2 * 3 * 4 = 24
