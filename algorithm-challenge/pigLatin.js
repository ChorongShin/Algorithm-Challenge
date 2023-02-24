function translatePigLatin(str) {
  const vowels = /^[aeiou]/;
  const consonants = /^[^aeiou]+/;

  if (str.match(vowels)) {
    return str + 'way';
  }

  const consonantCluster = str.match(consonants)[0];

  return str.substring(consonantCluster.length) + consonantCluster + 'ay';
}


//Examples
translatePigLatin('consonant') //--> onsonantcay;
translatePigLatin('algorithm') //--> algorithmway;
