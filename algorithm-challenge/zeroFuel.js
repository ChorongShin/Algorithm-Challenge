const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
}

//Examples
zeroFuel(50, 25, 2) //true
zeroFuel(100, 50, 1) //false
