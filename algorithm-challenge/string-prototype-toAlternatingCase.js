String.prototype.toAlternatingCase = function() {
  let result = '';

  for (let i = 0; i < this.length; i++) {
    if (this[i] ===  this[i].toUpperCase()) {
      result += this[i].toLowerCase();
    } else {
      result += this[i].toUpperCase();
    }
  }
  return result;
}

//Other solution

String.prototype.toAlternatingCase = function() {
  return this.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('')
}

//Examples
"hello world".toAlternatingCase() // "HELLO WORLD"
"HeLLo WoRLD".toAlternatingCase() // "hEllO wOrld"
