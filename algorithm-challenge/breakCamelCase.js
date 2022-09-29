function breakCamelCase(string) {
  const arr = string.split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      result += arr[i];
    } else if (arr[i] === arr[i].toUpperCase()) {
      result += ' ' + arr[i];
    }
  }
  return result;
}

breakCamelCase('camelCase') //--> 'camel Case'
breakCamelCase('identifier') //-->'identifier'
