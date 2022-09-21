function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(value => value === arr[i]).length;

    if (count % 2 !== 0) {
      return arr[i];
    }
  }
}

/* Other solution */
function findOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (currentNum === arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return currentNum;
    }
  }

}
