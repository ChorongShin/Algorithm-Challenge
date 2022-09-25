const binaryArrayToNumber = arr => {
  const binaryString = arr.join("");
  return parseInt(binaryString, 2);
}

//Examples:
binaryArrayToNumber([0, 0, 0, 1]) //=> 1
binaryArrayToNumber([0, 0, 1, 0]) //=> 2
binaryArrayToNumber([1, 0, 0, 1]) //=> 9
binaryArrayToNumber([0, 1, 1, 0]) //=> 6
binaryArrayToNumber([1, 1, 1, 1]) //=> 15
