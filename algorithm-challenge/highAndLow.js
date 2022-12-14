function highAndLow(numbers) {
  const numArr = numbers.split(' ');
  const minNum = Math.min(...numArr);
  const maxNum = Math.max(...numArr);

  return `${maxNum} ${minNum}`;
}


//Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
