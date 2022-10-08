function towerBuilder(nFloors) {
  let space ='';
  let star = '';
  const result = [];

  for (let i = 1; i <= nFloors; i++) {
    space = ' '.repeat(nFloors - i);
    star = "*".repeat((2*i) - 1);
    result.push(`${space}${star}${space}`);
  }
  return result;
}

towerBuilder(1) //--> ['*']
towerBuilder(2) //--> [' * ', '***']
towerBuilder(3) //--> ['  *  ', ' *** ', '*****']
