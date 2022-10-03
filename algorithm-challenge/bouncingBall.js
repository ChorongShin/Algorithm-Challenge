function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && h > window) {
    let count = 1;
    h = h * bounce;
    while (h > window) {
      count += 2;
      h = h * bounce;
    }
    return count;
  } else {
    return -1;
  }
}

//Examples
bouncingBall(3, 0.66, 1.5) //--> 3
bouncingBall(3, 1, 1.5) //--> -1
