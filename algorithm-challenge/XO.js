function XO(str) {
  let sumX = 0;
  let sumO = 0;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      sumX++;
    } else if (str[i] === 'o') {
      sumO++;
    }
  }
  return sumX === sumO;
}

//Examples
XO('xo') //true
XO('Oo') //false
XO('ooxXm') //true
