function reverseWords(str) {
  str = str.split(' ').reverse().join(' ');
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

//Example:
reverseWords('This is an example!') //--> 'sihT si na !elpmaxe'
