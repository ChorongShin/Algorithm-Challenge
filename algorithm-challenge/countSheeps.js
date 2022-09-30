function countSheeps(arrayOfSheeps) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] === true) {
      sum++;
    }
  }
  return sum;
}


//Example:
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]) //--> 17
