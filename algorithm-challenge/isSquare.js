const isSquare = function(n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0;
}

isSquare(0) //true
isSquare(-1) //false
isSquare(3) //false
isSquare(25) //true
