function firstNonConsecutive(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
    i++;

    if (arr[i + 1] === undefined) {
      return null;
    }
  }
}

//Examples
firstNonConsecutive([1,2,3,4,6,7,8]) //6
firstNonConsecutive([-3,-2,-1,0,1,2,3,4,5]) //null
