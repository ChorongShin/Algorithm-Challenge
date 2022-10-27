function persistence(num) {
  if (num <= 9) {
    return 0;
  }

  let times = 0;
  while (num > 9) {
    num = num.toString().split('');
    num = num.reduce((a, b) => Number(a) * Number(b), 1);
    times++;
  }

  return times;
}


persistence(39) // 3
persistence(4) // 0
persistence(999) // 4
