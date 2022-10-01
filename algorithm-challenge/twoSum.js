function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
}


//Examples
twoSum([2, 7, 11, 15], 9) //--> [0, 1]
twoSum([1, 2, 3], 4) // --> [0, 2]
