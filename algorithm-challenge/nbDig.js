function nbDig(n, d) {
  let i = 0;
  let k = [];

   while (i <= n) {
    k.push(i ** 2);
    i++;
  }

  let newNums = k.join('').split('');

  return newNums.filter(num => {
    return Number(num) === d;
  }).length;
}

//Examples
nbDig(10, 1) // 4
nbDig(25, 1) //11
