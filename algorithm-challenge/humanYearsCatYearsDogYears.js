const humanYearsCatYearsDogYears = function(humanYears) {

  if (humanYears === 1) {
    return [1, 15, 15]
  }

  if (humanYears === 2) {
    return [2, 24, 24]
  }

  if (humanYears > 2) {
    return [humanYears, 24 + ((humanYears - 2) * 4), 24 + ((humanYears - 2) * 5)]
  }

}

//Examples
humanYearsCatYearsDogYears(1) //--> [1, 1, 1]
humanYearsCatYearsDogYears(2) // --> [1, 15, 15]
humanYearsCatYearsDogYears(10) // --> [10, 56, 64]
