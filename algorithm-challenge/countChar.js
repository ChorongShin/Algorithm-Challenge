function count(string) {
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] += 1;
    } else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

//Example:
console.log(count('aba'));
//Output: {a: 2, b: 1}
