function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2);
  const sorted = merged.sort((a, b) => a - b);
  return [...new Set(sorted)];
}

//Examples
mergeArrays([1,2,3,4],[5,6,7,8]) //--> [1,2,3,4,5,6,7,8]
mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]) [1,2,3,4,5,7,9,10,11,12]
