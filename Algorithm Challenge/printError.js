function printError(s) {
  const letters = s.split("");
  const alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

  let error = 0;

  for (let i = 0; i < letters.length; i++) {
    if (!(alp.includes(letters[i]))) {
      error++;
    }
  }
  return `${error}/${s.length}`;
}
