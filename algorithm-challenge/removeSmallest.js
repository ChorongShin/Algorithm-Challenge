function removeSmallest(numbers) {
  const minNum = Math.min(...numbers);
  const indexOfMin = numbers.indexOf(minNum);

  const mutate = [...numbers];

  mutate.splice(indexOfMin, 1);
  return mutate;
}

/*
"Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list."
*/


//Examples:
removeSmallest([1,2,3,4,5]) //=> [2,3,4,5]
removeSmallest([5,3,2,1,4]) //=> [5,3,2,4]
removeSmallest([2,2,1,2,1]) //=> [2,2,2,1]
