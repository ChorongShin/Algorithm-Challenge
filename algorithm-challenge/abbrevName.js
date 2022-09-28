function abbrevName(name) {
  const arr = name.split(' ');
  return (`${arr[0][0]}.${arr[1][0]}`).toUpperCase();
}


//Examples:
abbrevName('Sam Smith') //--> S.S
abbrevName('chorong shin') //--> C.S
