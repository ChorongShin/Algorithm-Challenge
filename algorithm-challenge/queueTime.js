function queueTime(customers, n) {
  const tills = new Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let turn = tills.indexOf(Math.min(...tills));
    tills[turn] += customers[i];
  }
  return Math.max(...tills);
}

//Examples
queueTime([1,2,3,4], 1) //--> 10
queueTime([2,2,3,3,4,4], 2) //--> 9
queueTime([1,2,3,4,5], 100) //--> 5
queueTime([35,14,4,31,11,5,5,19,24,20,19], 2) //--> 97
