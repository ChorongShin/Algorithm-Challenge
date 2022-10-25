function fixStringCase(string) {
  let lowerCaseNum = 0;
  let upperCaseNum = 0;
  let sameString = string.toLowerCase()
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sameString[i]) {
      lowerCaseNum++;
    } else {
      upperCaseNum++;
    }
  }
  return lowerCaseNum >= upperCaseNum ? string.toLowerCase() : string.toUpperCase()
}

//Examples
fixStringCase('code') //'code'
fixStringCase('CODe') // 'CODE'
fixStringCase('COde') // 'code'
