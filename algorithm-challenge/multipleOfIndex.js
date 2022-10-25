function multipleOfIndex(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % i === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

//Alternative solution
function multipleOfIndex(arr) {
  return arr.filter((num, i) => num % i === 0);
}

//Examples
multipleOfIndex([22, -6, 32, 82, 9, 25]) //[-6, 32, 25]
multipleOfIndex([68, -1, 1, -7, 10, 10]) // [-1, 10]
