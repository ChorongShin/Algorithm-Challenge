function removeExclamationMarks(s) {
  const arr = s.split('');
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '!') {
      result += arr[i];
    }
  }
  return result;
}


//Other solution

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}

//Examples:
removeExclamationMarks('Hello World!') //--> 'Hello World'
removeExclamationMarks('Hello! World!') //--> 'Hello Word'
