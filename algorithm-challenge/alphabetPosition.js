function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';

  const textArray = text.toLowerCase().split('');

  const includeLetters = textArray.filter(letter => letters.indexOf(letter) > -1)

 const result = includeLetters.map(letter => letters.indexOf(letter) + 1);

 return result.join(' ');
}

//Examples
alphabetPosition("The sunset sets at twelve o' clock.")
//-> "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
