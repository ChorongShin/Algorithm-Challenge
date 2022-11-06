function squareDigits(num) {
  num = num.toString().split('');
  let squared ='';
  for (let i = 0; i < num.length; i++) {
    squared += Number(num[i] * num[i]).toString();
  }

 return Number(squared)
}


//Example
squareDigits(9119) //811181
