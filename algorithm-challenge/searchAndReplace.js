function myReplace(str, before, after) {
  const isUpperCased = string => /^[A-Z]*$/.test(string[0]);

  if (isUpperCased(before[0])) {
    return str.replace(before, after[0].toUpperCase() + after.slice(1));
  } else {
    return str.replace(before, after[0].toLowerCase() + after.slice(1));
  }
}

//Examples
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped') //--> 'A quick brown fox leaped over the lazy dog'

myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting') //--> 'He is Sitting on the couch'
