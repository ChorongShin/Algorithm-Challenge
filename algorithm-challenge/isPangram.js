function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  //Check if there is a white splace in a string
  let regex = /\s/g;
  //if it does, remove the white splace
  let lowercase = string.toLowerCase().replace(regex, "");

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
   return true;
}

isPangram("The quick brown fox jumps over the lazy dog.") //--> true
isPangram("This is not a pangram.") //--> false
