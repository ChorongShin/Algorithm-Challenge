function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

//Examples
getDivisorsCnt(4) // 3 (1, 2, 4)
getDivisorsCnt(12) // 6 (1, 2, 3, 4, 6, 12)
