function correctDigits(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '0') {
      result += 'O';
    } else if (string[i] === '5') {
      result += 'S';
    } else if (string [i] === '1') {
      result += 'I';
    } else {
      result += string[i];
   }
  }
  return result;
}

//Examples
correctDigits("L0ND0N") // --> "LONDON"
correctDigits("DUBL1N") // --> "DUBLIN"
correctDigits("BUDAPE5T") //--> "BUDAPEST"
