function sumDigits(number) {
  number = Math.abs(number).toString().split('');
  const total = number.reduce((a, b) => Number(a) + Number(b), 0)
  return total;
}


//Examples
sumDigits(10) //1
sumDigits(99) //18
sumDigits(-32) //5
