function doubleChar(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}

//Examples
doubleChar('String') //'SSttrriinngg'
doubleChar('1234!_') // '11223344!!__'
