const maxSequence = function(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let start = 0;
    for (let j = i; j < arr.length; j++) {
      start = arr[j];
      maxSum = Math.max(maxSum, start)
    }
  }
  return maxSum;
}


//Examples
maxSequence([]) //0
maxSequence([-1, -2, -3, -4]) //0
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) //6
