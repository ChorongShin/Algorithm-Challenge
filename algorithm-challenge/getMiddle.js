function getMiddle(s) {
  let middleIndex = Math.floor(s.length / 2)

  if (s.length % 2 === 0) {
    return s.slice(middleIndex -1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex)
  }
}

/*
If the word's length is even, return the middle 2 characters
If the word's length is odd,  return the middle character
*/


//Examples:
getMiddle('test') //--> 'es'
getMiddle('testing') //--> 't
