function capitalize(s) {
  s = s.toLowerCase();
  let result = [];
  let even = '';
  let odd = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
     even += s[i].toUpperCase();
    } else {
      even += s[i];
    }

    if(i % 2 === 1) {
      odd += s[i].toUpperCase();
    } else {
      odd += s[i];
    }
  }
        result.push(even, odd);
return result;
}


//Example
capitalize('abcdef') //--> ['AbCdEf', 'aBcDeF']
