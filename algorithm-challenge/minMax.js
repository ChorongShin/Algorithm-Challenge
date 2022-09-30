function minMax(arr) {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  return [minNum, maxNum];
}


//Examples
minMax([1, 2, 3, 4, 5]) //--> [1, 5]
minMax([1]) // --> [1, 1]
