function digPow(n, p) {
  //Split a number into Digits;
  const nums = [...String(n)].map(Number);
  let sum = 0;


  //(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...)
  for (let j = 0; j < nums.length; j++) {
    let num = Math.pow(nums[j], p);
    p++;
    sum += num;
  }

  //check if the sum is divisible by p and get integer value
  if (Number.isInteger(sum / n)) {
    return sum / n;
  } else {
    return -1;
  }

}


//Examples:
digPow(89, 1)
//output: 1
digPow(92, 1)
//output: -1
digPow(46288, 3)
//output: 51
