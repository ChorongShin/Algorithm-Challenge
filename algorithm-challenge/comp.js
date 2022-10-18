function comp(arr1, arr2) {
  if (arr1 === null || arr2 === null) {
    return false;
  }

  return arr1.map(num => num * num).sort().toString() === arr2.sort().toString();
}

//Examoles
comp([2, 1, 3], [18, 1, 2]) //false
comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]) //true
