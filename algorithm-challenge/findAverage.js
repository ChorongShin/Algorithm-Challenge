function find_average(array) {
  if (array.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}


//Example
find_average([1, 2, 3, 4]) //--> 2.5
